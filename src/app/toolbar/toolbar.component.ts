import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  private currentRoute = "";

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit() {}

  isAboutRoute(): boolean {
    const strippedRoute = this.stripCurrentRoute();
    // Needs empty string in case it comes to base path without redirect
    return strippedRoute === "about" || strippedRoute === "";
  }

  isPortfolioRoute(): boolean {
    return this.stripCurrentRoute() === "portfolio";
  }

  stripCurrentRoute(): string {
    return this.currentRoute.split("/").slice(-1)[0];
  }
}
