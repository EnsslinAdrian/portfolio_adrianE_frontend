import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../service/language/variablen-service.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [
    CommonModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  language: boolean = true;

  constructor(private service: VariablenServiceService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }
}
