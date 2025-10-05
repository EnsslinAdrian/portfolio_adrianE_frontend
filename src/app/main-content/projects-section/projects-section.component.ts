import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../service/language/variablen-service.service';
import { TypografieComponent } from "../../shared/text/typografie/typografie.component";
import { CommonModule } from '@angular/common';
import { ProjectsDetailsComponent } from "./projects-details/projects-details.component";
import { ProjectsService } from '../../../service/projects/projects.service';
import { FadeUpDirective } from "../../../directive/fade-up.directive";


@Component({
  selector: 'app-projects-section',
  imports: [TypografieComponent, CommonModule, ProjectsDetailsComponent, FadeUpDirective],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  language: boolean = true;
  descriptionE: string = 'Explore a selection of my work here - Interact with projects to see my skills in action.';
  descriptionDe: string = 'Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.';
  currentProjectIndex: number = -1;
  index: number = 0;
  showDetails: boolean = false;

  constructor(
    private service: VariablenServiceService,
    public projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  setCurrentProject(index: number) {
    if (this.currentProjectIndex === index) {
      this.currentProjectIndex = -1;
    } else {
      this.currentProjectIndex = index;
    }
  }

  openCurrentProject(project: any) {
    this.showDetails = true;
    document.body.style.overflow = 'hidden';
    this.index = this.currentProjectIndex;
    console.log(this.index);
  }

  closeDetails() {
    this.showDetails = false;
    document.body.style.overflow = 'auto';
  }
}
