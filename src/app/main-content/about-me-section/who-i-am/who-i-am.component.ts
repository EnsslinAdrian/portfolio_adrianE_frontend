import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../../service/language/variablen-service.service';
import { TypografieComponent } from "../../../shared/text/typografie/typografie.component";

@Component({
  selector: 'app-who-i-am',
  imports: [TypografieComponent],
  templateUrl: './who-i-am.component.html',
  styleUrl: './who-i-am.component.scss'
})
export class WhoIAmComponent {
  language: boolean = true;

descriptionE: string = 'Hi, I’m a german speaking Fullstack Developer based in Donauwörth. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.';
descriptionDe: string = 'Hallo, ich bin ein deutschsprachiger Fullstack-Entwickler mit Sitz in Donauwörth. Motiviert von den grenzenlosen Möglichkeiten in der IT freue ich mich darauf, visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.';

locationE: string = 'Flexible in terms of working environments, I can work effectively both on-site in Munich and remotely.';
locationDe: string = 'Flexibel in Bezug auf Arbeitsumgebungen kann ich sowohl vor Ort in Donauwörth als auch remote effektiv arbeiten.';

cognitionE: string = 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.';
cognitionDe: string = 'Ich bin aufgeschlossen und stets auf der Suche nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten kontinuierlich zu verbessern.';

newReleasesE: string = 'In my profession, programming isnt just about writing code; its a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.';
newReleasesDe: string = 'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben; es ist eine kreative Form der Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.';

constructor(private service: VariablenServiceService) {}

ngOnInit(): void {
  this.service.currentLanguage.subscribe(language => {
      this.language = language;
  })
}
}
