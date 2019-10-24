import { NgModule } from "@angular/core";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
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
  constructor(library: FaIconLibrary) {
    // Separated by library for ease of understanding
    // Brand icons
    library.addIcons(faAndroid, faApple, faLinkedin, faGithub);

    // Solid icons
    library.addIcons(faEnvelope, faLink);
  }
}
