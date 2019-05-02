import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { v4 as uuid } from "uuid";
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

  invokeDialogflowForwarder(message: Message) {
    const data = {
      query: message.content,
      sessionId: this.sessionId
    };

    this.http.post(dialogflowForwarderUrl, data).subscribe(res => {
      const fulfillmentResponse = res[0].queryResult.fulfillmentMessages[0];
      if (fulfillmentResponse.text) {
        this.addToConversation(
          new Message(fulfillmentResponse.text.text[0], MessageSender.Bot)
        );
      } else if (fulfillmentResponse.payload) {
      }
    });
  }
}
