import { Component } from '@angular/core';
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { ContactEmailComponent } from "./contact-email/contact-email.component";
import { FadeUpDirective } from "../../../directive/fade-up.directive";


@Component({
  selector: 'app-contact-me-section',
  imports: [ContactInfoComponent, ContactEmailComponent, FadeUpDirective],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {

}
