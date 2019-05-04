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
  private conversation = new ReplaySubject<Message>(1);
  private sessionId: string = uuid();
  public conversation$ = this.conversation.asObservable();

  constructor(private http: HttpClient) {}

  addToConversation(message: Message): void {
    this.conversation.next(message);
  }

  chatWithBot(message: Message) {
    this.addToConversation(message);

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
        const fulfillmentMessage =
          response[0].queryResult.fulfillmentMessages[0];
        if (fulfillmentMessage.text) {
          this.handleTextFulfillment(fulfillmentMessage);
        } else if (fulfillmentMessage.payload) {
          this.handlePayloadFulfillment(fulfillmentMessage);
        }
      });
  }

  handleTextFulfillment(fulfillmentMessage: any): void {
    this.addToConversation(
      new Message(fulfillmentMessage.text.text[0], MessageSender.Bot)
    );
  }

  handlePayloadFulfillment(fulfillmentMessage: any): void {}
}
