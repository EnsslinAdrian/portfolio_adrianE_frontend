import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TypografieComponent } from "../../shared/text/typografie/typografie.component";
import { VariablenServiceService } from '../../../service/language/variablen-service.service';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

@Component({
  selector: 'app-landing-section',
  imports: [
    CommonModule,
    TypografieComponent,
    RouterLink
],
  templateUrl: './landing-section.component.html',
  styleUrl: './landing-section.component.scss'
})
export class LandingSectionComponent {
  items = ['Available for Remote work', '•', 'Frontend Developer', '•', 'Based in Donauwörth', '•', 'Open to work', '•'];
  itemsDE = ['Verfügbar für Remote-Arbeit', '•', 'Frontend-Entwickler', '•', 'Wohnhaft in Donauwörth', '•', 'Offen für neue Herausforderungen', '•'];
  language: boolean = true;

  constructor(private service: VariablenServiceService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  ngAfterViewInit(): void {
    this.animateHeadline();
  }

private animateHeadline() {
  document.fonts.ready.then(() => {
    const subSplit = new SplitText("#subheadline", {
      type: "chars",
      wordsClass: "char++",
    });

    const headSplit = new SplitText("#headline", {
      type: "chars",
      wordsClass: "char++",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        subSplit.revert();
        headSplit.revert();
      }
    });

    // 1. Subheadline
    tl.from(subSplit.chars, {
      duration: 0.8,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "bounce.out",
      delay: 0.2,
    });

    // 2. Headline
    tl.from(headSplit.chars, {
      duration: 0.8,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "bounce.out",
      delay: 0.2,
    }, ">");

    // 3. #myWork
    tl.from("#myWork", {
      duration: 0.8,
      x: -50,
      autoAlpha: 0,
      ease: "bounce.out",
    }, ">");

    // 4. #contactMe
    tl.from("#contactMe", {
      duration: 0.8,
      x: 50,
      autoAlpha: 0,
      ease: "bounce.out",
    }, ">");
  });
}

}
