import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
