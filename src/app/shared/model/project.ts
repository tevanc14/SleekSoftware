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
    public logoUrl: string,
    public demo: Demo,
    public links: ProjectLinks
  ) {
    this.logoUrl = this.buildLogoUrl(logoUrl);
  }

  buildLogoUrl(logoUrl: string): string {
    if (logoUrl !== null) {
      return `https://storage.googleapis.com/interactiveresume-430ce.appspot.com/logo/${logoUrl}`;
    }
  }
}

export class Demo {
  constructor(public path: string, public demoType: DemoType) {
    this.path = this.buildPath(path);
  }

  buildPath(path: string): string {
    if (path !== null) {
      return `https://storage.googleapis.com/interactiveresume-430ce.appspot.com/demo/${path}`;
    }
  }
}

export enum DemoType {
  Web,
  Mobile,
  Bit
}

export class ProjectLinks {
  constructor(
    public githubUrl: string = null,
    public androidUrl: string = null,
    public iosUrl: string = null,
    public webUrl: string = null
  ) {
    this.githubUrl = this.buildGithubUrl(githubUrl);
  }

  buildGithubUrl(githubUrl: string): string {
    return `https://github.com/tevanc14/${githubUrl}`;
  }
}
