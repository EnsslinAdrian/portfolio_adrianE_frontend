import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VariablenServiceService } from '../../../../../service/language/variablen-service.service';

@Component({
  selector: 'app-menu-mobile',
  imports: [
    CommonModule
  ],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  language: boolean = true

  menu_close_icon: string = '/images/menu_icons/close_small.png';
  menu_close_icon_hover: string = '/images/menu_icons/close-hover.png';

  hover_close_icon: boolean = true;

  @Input() openMenu: boolean = false;
  @Output() closeMenu = new EventEmitter<void>();
  @Output() languageChangeEvent = new EventEmitter<string>();

  constructor(private service: VariablenServiceService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  closeMenuPopup() {
    this.openMenu = false;
    this.closeMenu.emit();
  }

  changelanguage(language: string) {
    this.languageChangeEvent.emit(language);
  }

}
