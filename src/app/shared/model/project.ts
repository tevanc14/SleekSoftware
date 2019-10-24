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
  public githubUrl: string = null;
  public androidUrl: string = null;
  public iosUrl: string = null;

  constructor(
    githubProjectName: string = null,
    public webUrl: string = null,
    androidIdentifier: string = null,
    iosIdentifier: string = null
  ) {
    if (githubProjectName !== null) {
      this.githubUrl = this.buildGithubUrl(githubProjectName);
    }

    if (androidIdentifier !== null) {
      this.androidUrl = this.buildAndroidUrl(androidIdentifier);
    }

    if (iosIdentifier !== null) {
      this.iosUrl = this.buildIosUrl(iosIdentifier);
    }
  }

  buildGithubUrl(githubProjectName: string): string {
    return `https://github.com/tevanc14/${githubProjectName}`;
  }

  buildAndroidUrl(androidIdentifier: string): string {
    return `https://play.google.com/store/apps/details?id=${androidIdentifier}`;
  }

  buildIosUrl(iosIdentifier: string): string {
    return `https://apps.apple.com/us/app/${iosIdentifier}`;
  }
}
