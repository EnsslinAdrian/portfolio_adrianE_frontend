import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuMobileComponent } from "./menu-mobile/menu-mobile.component";
import { VariablenServiceService } from '../../../../service/language/variablen-service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MenuMobileComponent,
    RouterLink
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo: string = '/images/logo/logo-adrian.png';
  logo_transparent: string = '/images/logo/logo-adrian-hover.png';

  logo_init: string = '/images/logo/logo-adrian-init.png';
  logo_init_transparent: string = '/images/logo/logo-adrian-init-hover.png';

  menu_icon: string = '/images/menu_icons/menu.png';
  menu_icon_hover: string = '/images/menu_icons/menu-hover.png';

  hover_logo: boolean = true;
  hover_logo_init: boolean = true;
  hover_menu_icon: boolean = true;

  language: boolean = true;

  openMenu: boolean = false;

  constructor(
    private service: VariablenServiceService,
    private router: Router
  ) { }

  openMenuPopup() {
    this.openMenu = true;
    this.hover_menu_icon = true;
  }

  ngOnInit() {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    });
  }

  changelanguage(language: string) {
    if (language === 'de') {
      this.service.changeLanguage(false);
    } else if (language === 'en') {
      this.service.changeLanguage(true);
    }
  }

  gotToStart() {
    this.router.navigate(['/']);
  }
}
