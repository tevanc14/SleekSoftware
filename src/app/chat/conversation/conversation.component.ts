import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from "@angular/core";
import { Message, MessageSender } from "src/app/shared/model/message";
import { ChatService } from "src/app/shared/service/chat/chat.service";

@Component({
  selector: "app-conversation",
  templateUrl: "./conversation.component.html",
  styleUrls: ["./conversation.component.scss"]
})
export class ConversationComponent implements AfterViewChecked, OnInit {
  @ViewChild("autoScroll") private scrollContainer: ElementRef;

  public conversation: Array<Message> = [];

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.conversation$.subscribe((messages: Array<Message>) => {
      this.conversation = messages;
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  isSentByBot(message: Message): boolean {
    return message.sender === MessageSender.Bot;
  }

  isSentByUser(message: Message): boolean {
    return message.sender === MessageSender.User;
  }

  waitingOnResponse(): boolean {
    if (this.conversation.length === 0) {
      return true;
    } else {
      const lastSentBy: MessageSender = this.conversation.slice(-1)[0].sender;
      return lastSentBy !== MessageSender.Bot;
    }
  }
}
