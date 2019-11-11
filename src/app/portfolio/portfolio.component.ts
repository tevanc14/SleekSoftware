import { Component, OnInit } from "@angular/core";

import {
  ProjectCategory,
  Demo,
  DemoType,
  ProjectLinks,
  ProjectCategoryName
} from "../shared/model/project";
import { projectCategories } from "./project-categories";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  public projectCategories: Array<ProjectCategory> = projectCategories;

  constructor() {}

  ngOnInit() {}

  isMobileDemo(demo: Demo): boolean {
    return demo.demoType === DemoType.Mobile;
  }

  isWebDemo(demo: Demo): boolean {
    return demo.demoType === DemoType.Web;
  }

  isBitDemo(demo: Demo): boolean {
    return demo.demoType === DemoType.Bit;
  }

  hasGithubLink(projectLinks: ProjectLinks): boolean {
    return projectLinks.githubUrl !== null;
  }

  hasAndroidLink(projectLinks: ProjectLinks): boolean {
    return projectLinks.androidUrl !== null;
  }

  hasIosLink(projectLinks: ProjectLinks): boolean {
    return projectLinks.iosUrl !== null;
  }

  hasWebLink(projectLinks: ProjectLinks): boolean {
    return projectLinks.webUrl !== null;
  }

  isBitsCategory(projectCategory: ProjectCategory) {
    return projectCategory.title === ProjectCategoryName.Bits;
  }
}
