import { Component } from '@angular/core';
import { WhoIAmComponent } from "./who-i-am/who-i-am.component";
import { FadeUpDirective } from "../../../directive/fade-up.directive";


@Component({
  selector: 'app-about-me-section',
  imports: [WhoIAmComponent, FadeUpDirective],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

}
