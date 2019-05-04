import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FontAwesomeIconsModule {
  constructor() {
    library.add(faLinkedin);
    library.add(faGithub);

    library.add(faEnvelope);
  }
}
