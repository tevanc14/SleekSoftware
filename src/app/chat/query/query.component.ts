import { Component, OnInit } from "@angular/core";
import { Message, MessageSender } from "src/app/shared/model/message";
import { ChatService } from "src/app/shared/service/chat/chat.service";

@Component({
  selector: "app-query",
  templateUrl: "./query.component.html",
  styleUrls: ["./query.component.scss"]
})
export class QueryComponent implements OnInit {
  public queryInput: string;

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {}

  converse(): void {
    if (this.inputIsValid()) {
      this.chatService.chatWithBot(
        new Message(this.queryInput, MessageSender.User)
      );

      this.clearInput();
    }
  }

  inputIsValid(): boolean {
    return !(
      this.queryInput === undefined ||
      this.queryInput === null ||
      this.queryInput.trim() === ""
    );
  }

  clearInput(): void {
    this.queryInput = "";
  }
}
