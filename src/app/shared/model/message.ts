export class Message {
  constructor(public content: string, public sentBy: MessageSender) {}
}

export enum MessageSender {
  User = "user",
  Bot = "bot"
}
