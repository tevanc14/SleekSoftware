import { Component, OnInit } from "@angular/core";
import { ChatService } from "./shared/service/chat/chat.service";
import { Message, MessageSender } from "./shared/model/message";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public conversation: Array<Message> = [];
  public queryInput: string;

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.conversation$.subscribe((message: Message) => {
      this.conversation.push(message);
    });
  }

  converse(): void {
    this.chatService.invokeDialogflowForwarder(
      new Message(this.queryInput, MessageSender.User)
    );
  }
}
