import { Component } from '@angular/core';
import { SkillsIconsComponent } from "./skills-icons/skills-icons.component";
import { SkillsTextComponent } from "./skills-text/skills-text.component";
import { VariablenServiceService } from '../../../service/language/variablen-service.service';
import { TypografieComponent } from "../../shared/text/typografie/typografie.component";
import { FadeUpDirective } from "../../../directive/fade-up.directive";


@Component({
  selector: 'app-skills-section',
  imports: [SkillsIconsComponent, SkillsTextComponent, TypografieComponent, FadeUpDirective],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  language: boolean = true;

  constructor(private service: VariablenServiceService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }
}
