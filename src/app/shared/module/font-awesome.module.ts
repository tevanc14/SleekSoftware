import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAndroid,
  faApple,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FontAwesomeIconsModule {
  constructor() {
    library.add(faAndroid);
    library.add(faApple);
    library.add(faLinkedin);
    library.add(faGithub);

    library.add(faEnvelope);
    library.add(faLink);
  }
}
