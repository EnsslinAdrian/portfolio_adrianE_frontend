import { Component } from '@angular/core';
import { LandingSectionComponent } from "./landing-section/landing-section.component";
import { AboutMeSectionComponent } from "./about-me-section/about-me-section.component";
import { SkillsSectionComponent } from "./skills-section/skills-section.component";
import { ProjectsSectionComponent } from "./projects-section/projects-section.component";
import { ContactMeSectionComponent } from "./contact-me-section/contact-me-section.component";
import { FeedbacksSectionComponent } from "./feedbacks-section/feedbacks-section.component";
import { gsap } from "gsap";

@Component({
  selector: 'app-main-content',
  imports: [LandingSectionComponent, AboutMeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, ContactMeSectionComponent, FeedbacksSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
