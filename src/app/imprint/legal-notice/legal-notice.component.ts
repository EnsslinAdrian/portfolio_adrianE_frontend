import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../service/language/variablen-service.service';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  language: boolean = true;

  constructor(private service: VariablenServiceService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }
}
