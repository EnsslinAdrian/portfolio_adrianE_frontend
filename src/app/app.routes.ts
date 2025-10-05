import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './imprint/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './imprint/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    data: {
      title: 'Adrian Enßlin | Softwareentwickler & Full Stack Developer',
      description: 'Ich bin Adrian Enßlin – erfahrener Softwareentwickler mit Fokus auf moderne Webentwicklung. Spezialisiert auf Angular, TypeScript, Python, Django und skalierbare Full-Stack-Lösungen.',
      keywords: 'Softwareentwickler, Webentwicklung, Angular, TypeScript, JavaScript, Python, Django, Backend, Frontend, Full Stack Developer, REST API, Cloud, moderne Technologien'
    }
  },
  {
    path: 'impressum',
    loadComponent: () => import('./imprint/legal-notice/legal-notice.component').then(m => m.LegalNoticeComponent),
    data: {
      title: 'Impressum | Adrian Enßlin',
      description: 'Impressum von Adrian Enßlin – rechtliche Angaben, Verantwortlichkeiten und Kontaktinformationen.',
      keywords: 'Impressum, Adrian Enßlin, rechtliche Hinweise, Verantwortlich, Softwareentwickler, Kontakt'
    }
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('./imprint/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    data: {
      title: 'Datenschutzerklärung | Adrian Enßlin',
      description: 'Informationen zum Datenschutz von Adrian Enßlin – wie Ihre Daten verarbeitet, gespeichert und geschützt werden.',
      keywords: 'Datenschutz, Datenschutzerklärung, Adrian Enßlin, Datenschutzrichtlinie, DSGVO, Datensicherheit, Softwareentwickler'
    }
  }
];

