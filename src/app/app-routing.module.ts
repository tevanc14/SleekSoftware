import { NgModule } from "@angular/core";
import { RouterModule, Routes, ExtraOptions } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  {
    path: "about",
    component: ChatComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
