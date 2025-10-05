import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../../service/language/variablen-service.service';
import { TypografieComponent } from "../../../shared/text/typografie/typografie.component";

@Component({
  selector: 'app-contact-info',
  imports: [TypografieComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  language: boolean = true;

  contactTextE: string = 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.';
  contactTextDe: string = 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.';

  constructor(private service: VariablenServiceService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }


}
