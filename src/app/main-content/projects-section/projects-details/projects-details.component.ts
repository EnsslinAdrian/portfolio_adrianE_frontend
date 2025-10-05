import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectsService } from '../../../../service/projects/projects.service';
import { TypografieComponent } from "../../../shared/text/typografie/typografie.component";

@Component({
  selector: 'app-projects-details',
  imports: [
    CommonModule,
    TypografieComponent
],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.scss'
})
export class ProjectsDetailsComponent {
  @Input() showDetails: any;
  @Input() index: any;
  @Output() closeDetailsEvent = new EventEmitter<void>();

  constructor(
    public projectsService: ProjectsService
  ) {}

  closeDetails() {
    this.closeDetailsEvent.emit();
  }

  showNextProject() {
    if (this.index < this.projectsService.projects.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }
}
