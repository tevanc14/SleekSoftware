const gcsPrefix =
  "https://storage.googleapis.com/interactiveresume-430ce.appspot.com";

export class ProjectCategory {
  constructor(
    public matIconName: string,
    public title: string,
    public projects: Array<Project>
  ) {}
}

export enum ProjectCategoryName {
  Mobile = "Mobile",
  Web = "Web",
  Bits = "Bits"
}

export class Project {
  public scrollId: string;

  constructor(
    public name: string,
    public description: string,
    public logoUrl: string,
    public demo: Demo,
    public links: ProjectLinks
  ) {
    this.logoUrl = this.buildLogoUrl(logoUrl);
    this.scrollId = this.buildScrollId(name);
  }

  buildLogoUrl(logoUrl: string): string {
    if (logoUrl !== null) {
      return `${gcsPrefix}/logo/${logoUrl}`;
    }
  }

  buildScrollId(name: string): string {
    return name.replace(/\s/g, "-").toLowerCase();
  }
}

export class Demo {
  constructor(public path: string, public demoType: DemoType) {
    this.path = this.buildPath(path);
  }

  buildPath(path: string): string {
    if (path !== null) {
      return `${gcsPrefix}/demo/${path}`;
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
