export class ProjectCategory {
  constructor(
    public matIconName: string,
    public title: string,
    public projects: Array<Project>
  ) {}
}

export class Project {
  constructor(
    public name: string,
    public description: string,
    public demo: Demo,
    public links: ProjectLinks
  ) {}
}

export class Demo {
  constructor(public path: string, public demoType: DemoType) {}
}

export enum DemoType {
  Web,
  Mobile
}

export class ProjectLinks {
  constructor(
    public githubUrl: string = null,
    public androidUrl: string = null,
    public iosUrl: string = null,
    public webUrl: string = null
  ) {}
}
