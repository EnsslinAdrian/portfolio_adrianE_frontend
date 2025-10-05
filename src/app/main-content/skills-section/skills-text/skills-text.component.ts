import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../../service/language/variablen-service.service';
import { TypografieComponent } from "../../../shared/text/typografie/typografie.component";

@Component({
  selector: 'app-skills-text',
  imports: [TypografieComponent],
  templateUrl: './skills-text.component.html',
  styleUrl: './skills-text.component.scss'
})
export class SkillsTextComponent {
    language: boolean = true;

  descriptionE: string = 'My journey has involved working on diverse projects, employing a range of Fullstack technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.';
  descriptionDe: string = ' Meine Reise hat mich dazu geführt, an vielfältigen Projekten zu arbeiten und eine Reihe von Fullstack-Technologien und Konzepten einzusetzen. Ich bin offen dafür, neue Technologien und Methoden zu übernehmen, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Welt der Webentwicklung voraus zu sein.';

  contactMeE: string = 'Feel free to contact me. I look forward to expanding on my previous knowledge.';
  contactMeDe: string = 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.';

  constructor(private service: VariablenServiceService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  contact() {
    location.href = '#contact';
  }
}
