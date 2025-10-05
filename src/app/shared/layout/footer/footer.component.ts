import { Component } from '@angular/core';
import { VariablenServiceService } from '../../../../service/language/variablen-service.service';
import { TypografieComponent } from "../../text/typografie/typografie.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    TypografieComponent,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  language: boolean = true;

logo: string = '/images/logo/logo-adrian.png';
logo_transparent: string = '/images/logo/logo-adrian-hover.png';
hover_logo: boolean = true;

constructor(private service: VariablenServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  reloadPage() {
    this.router.navigate(['/'])
  }
}
