import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FontAwesomeIconsModule } from "./shared/module/font-awesome.module";
import { MaterialModule } from "./shared/module/material.module";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ChatComponent } from "./chat/chat.component";
import { QueryComponent } from "./chat/query/query.component";
import { ConversationComponent } from "./chat/conversation/conversation.component";
import { APP_BASE_HREF } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ChatComponent,
    QueryComponent,
    ConversationComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeIconsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
