import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { v4 as uuid } from "uuid";
import { DialogflowForwarderRequest } from "../../model/dialogflowForwarderRequest";
import { Message, MessageSender } from "../../model/message";
import { dialogflowForwarderUrl } from "../../../../assets/secrets";

@Injectable({
  providedIn: "root"
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
      sessionId: this.sessionId
    };

    this.invokeDialogflowForwarder(dialogflowForwarderRequest);
  }

  invokeDialogflowForwarder(
    dialogflowForwarderRequest: DialogflowForwarderRequest
  ) {
    this.http
      .post(dialogflowForwarderUrl, dialogflowForwarderRequest)
      .subscribe(response => {
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
      }
    }
  }

  handleTextFulfillment(fulfillmentMessage: any): void {
    this.addToConversation(
      new Message(fulfillmentMessage.text.text[0], MessageSender.Bot)
    );
  }

  handlePayloadFulfillment(fulfillmentMessage: any): void {}

  invokeWelcomeIntent(): void {
    this.chatWithBot(new Message("Where am I?", MessageSender.System));
  }

  sleep() {
    const duration = Math.floor(Math.random() * 800) + 300;
    return new Promise(resolve => setTimeout(resolve, duration));
  }
}
