export class Message {
  constructor(public content: string, public sender: MessageSender) {}
}

export enum MessageSender {
  User = "user",
  Bot = "bot"
}
