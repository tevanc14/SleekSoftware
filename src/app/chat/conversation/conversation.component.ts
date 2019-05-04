import { Component, OnInit } from "@angular/core";
import { Message, MessageSender } from "src/app/shared/model/message";
import { ChatService } from "src/app/shared/service/chat/chat.service";

@Component({
  selector: "app-conversation",
  templateUrl: "./conversation.component.html",
  styleUrls: ["./conversation.component.scss"]
})
export class ConversationComponent implements OnInit {
  public conversation: Array<Message> = [];

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.conversation$.subscribe((message: Message) => {
      this.conversation.push(message);
    });
  }

  isSentByBot(message: Message): boolean {
    return message.sender === MessageSender.Bot;
  }

  isSentByUser(message: Message): boolean {
    return message.sender === MessageSender.User;
  }
}
