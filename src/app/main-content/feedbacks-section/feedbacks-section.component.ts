import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../service/language/variablen-service.service';
import { CommonModule } from '@angular/common';
import { TypografieComponent } from "../../shared/text/typografie/typografie.component";
import { FadeUpDirective } from "../../../directive/fade-up.directive";


@Component({
  selector: 'app-feedbacks-section',
  imports: [
    CommonModule,
    TypografieComponent,
    FadeUpDirective
],
  templateUrl: './feedbacks-section.component.html',
  styleUrl: './feedbacks-section.component.scss'
})
export class FeedbacksSectionComponent {
    language: boolean = true;
  slides = [1, 2, 3];
  currentSlide = 0;

  feebackTextDe: string[] = [
    'Die Zusammenarbeit mit Adrian an Join war sehr produktiv. Seine schnelle und effiziente Programmierarbeit sowie seine Führungsqualitäten haben das Team vorangebracht. Er half bei Problemen immer sofort weiter.',
    'Adrian ist ein engagierter Kollege, der stets zur Hilfe bereit ist. Seine effiziente und detailorientierte Arbeitsweise sowie seine kreativen Ideen machen ihn zu einem wertvollen Teammitglied.',
    'Adrians schnelle Auffassungsgabe und Programmiergeschwindigkeit sind beeindruckend. Trotz eigener Aufgaben unterstützt er das Team und motiviert uns durch sein Streben nach Wissen.',
  ];

  feebackTextE: string[] = [
    "Working with Adrian on Join was very productive. His quick and efficient programming work, as well as his leadership qualities, pushed the team forward. He always helped immediately when problems arose.",
    "Adrian is an engaged colleague who is always ready to help. His efficient and detail-oriented work style, along with his creative ideas, make him a valuable team member.",
    "Adrian's quick grasp and programming speed are impressive. Despite his own tasks, he supports the team and motivates us through his pursuit of knowledge.",
  ];

  feebackPartner: string[] = [
    'Josy Krüger',
    'Rico Abitz',
    'Fabian Wilde',
  ];

  constructor(private service: VariablenServiceService) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  imgBack() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  imgForward() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  getTransform(index: number): string {
    const totalSlides = this.slides.length;
    let positionDiff = (index - this.currentSlide + totalSlides) % totalSlides;

    if (positionDiff > totalSlides / 2) {
      positionDiff -= totalSlides;
    }

    if (positionDiff === 0) {
      return 'translateX(0%) scale(1.2)';
    } else if (positionDiff === 1) {
      return 'translateX(130%)';
    } else if (positionDiff === 2) {
      return 'translateX(230%)';
    } else if (positionDiff === -1) {
      return 'translateX(-130%)';
    } else if (positionDiff === -2) {
      return 'translateX(-230%)';
    } else {
      return 'translateX(0%) scale(0)';
    }
  }

  isHidden(index: number): boolean {
    const totalSlides = this.slides.length;
    let positionDiff = (index - this.currentSlide + totalSlides) % totalSlides;

    if (positionDiff > totalSlides / 2) {
      positionDiff -= totalSlides;
    }

    return Math.abs(positionDiff) > 2;
  }

  getPointColor(index: number): string {
    return index === this.currentSlide ? '#3DCFB6' : '';
  }
}
