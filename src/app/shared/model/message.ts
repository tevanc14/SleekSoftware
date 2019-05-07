export class Message {
  constructor(
    public content: string = null,
    public sender: MessageSender,
    public card: Card = null
  ) {}
}

export enum MessageSender {
  User = "user",
  Bot = "bot",
  System = "system"
}

export class Card {
  constructor(
    public title: string,
    public content: string,
    public buttons: Array<Button>
  ) {}
}

export class Button {
  constructor(public text: string, public link: string) {}
}
