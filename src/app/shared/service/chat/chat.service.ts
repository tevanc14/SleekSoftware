import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { v4 as uuid } from "uuid";
import { DialogflowForwarderRequest } from "../../model/dialogflowForwarderRequest";
import { Message, MessageSender, Card, Button } from "../../model/message";
import { dialogflowForwarderUrl } from "../../../../assets/secrets";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private conversation = new ReplaySubject<Array<Message>>(1);
  private sessionId: string = uuid();
  public messages: Array<Message> = [];
  public conversation$ = this.conversation.asObservable();

  constructor(private http: HttpClient) {
    this.invokeWelcomeIntent();
  }

  addToConversation(message: Message): void {
    this.messages.push(message);
    this.conversation.next(this.messages);
  }

  chatWithBot(message: Message) {
    if (message.sender !== MessageSender.System) {
      this.addToConversation(message);
    }

    const dialogflowForwarderRequest: DialogflowForwarderRequest = {
      query: message.content,
      sessionId: this.sessionId,
    };

    this.invokeDialogflowForwarder(dialogflowForwarderRequest);
  }

  invokeDialogflowForwarder(
    dialogflowForwarderRequest: DialogflowForwarderRequest
  ) {
    this.http
      .post(dialogflowForwarderUrl, dialogflowForwarderRequest)
      .subscribe((response) => {
        // console.log(JSON.stringify(response));
        this.handleFulfillment(response[0].queryResult.fulfillmentMessages);
      });
  }

  async handleFulfillment(fulfillmentMessages: any): Promise<void> {
    for (const fulfillmentMessage of fulfillmentMessages) {
      if (fulfillmentMessages.length > 1) {
        await this.sleep();
      }

      if (fulfillmentMessage.text) {
        this.handleTextFulfillment(fulfillmentMessage);
      } else if (fulfillmentMessage.payload) {
        this.handlePayloadFulfillment(fulfillmentMessage);
      } else if (fulfillmentMessage.card) {
        this.handleCardFulfillment(fulfillmentMessage);
      }
    }
  }

  handleTextFulfillment(fulfillmentMessage: any): void {
    if (fulfillmentMessage.text.text[0] !== "") {
      this.addToConversation(
        new Message(fulfillmentMessage.text.text[0], MessageSender.Bot)
      );
    } else {
      this.addToConversation(
        new Message(
          "There seemed to be a mistake in answering your question, please ask again! My apologies",
          MessageSender.Bot
        )
      );
    }
  }

  handlePayloadFulfillment(fulfillmentMessage: any): void {
    const payloadResponse = fulfillmentMessage.payload.fields;
    const buttons: Array<Button> = this.buildButtonsFromPayloadResponse(
      payloadResponse
    );
    const card: Card = new Card(
      payloadResponse.title.stringValue,
      payloadResponse.content.stringValue,
      buttons
    );
    this.addToConversation(new Message(null, MessageSender.Bot, card));
  }

  handleCardFulfillment(fulfillmentMessage: any): void {
    const cardResponse = fulfillmentMessage.card;
    const buttons: Array<Button> = this.buildButtonsFromCardResponse(
      cardResponse
    );
    const card: Card = new Card(
      cardResponse.title,
      cardResponse.subtitle,
      buttons
    );
    this.addToConversation(new Message(null, MessageSender.Bot, card));
  }

  buildButtonsFromPayloadResponse(payloadResponse: any): Array<Button> {
    const buttons: Array<Button> = [];
    for (const button of payloadResponse.buttons.listValue.values) {
      const buttonFields = button.structValue.fields;
      buttons.push(
        new Button(buttonFields.text.stringValue, buttonFields.link.stringValue)
      );
    }
    return buttons;
  }

  buildButtonsFromCardResponse(cardResponse: any): Array<Button> {
    const buttons: Array<Button> = [];
    for (const button of cardResponse.buttons) {
      buttons.push(new Button(button.text, button.postback));
    }
    return buttons;
  }

  invokeWelcomeIntent(): void {
    this.chatWithBot(new Message("Where am I?", MessageSender.System));
  }

  sleep() {
    const duration = Math.floor(Math.random() * 800) + 300;
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
}
