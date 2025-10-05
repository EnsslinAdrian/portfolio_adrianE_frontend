import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablenServiceService {
  private languageSource: BehaviorSubject<boolean>;
  currentLanguage;

  constructor() {
    const savedLanguage = typeof window !== 'undefined' && localStorage.getItem('language');

    this.languageSource = new BehaviorSubject<boolean>(savedLanguage === 'false' ? false : true);

    this.currentLanguage = this.languageSource.asObservable();
  }

  changeLanguage(language: boolean) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language.toString());
    }
    this.languageSource.next(language);
  }
}
