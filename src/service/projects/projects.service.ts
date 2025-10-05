import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects = [
    {
      title: 'Join',
      skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      discriptionDe: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      image: '/images/projects/join_laptop.png',
      popupImage: '/images/projects/join-image.png',
      link: 'https://join-208.developerakademie.net/Join/index.html',
      github: 'https://github.com/EnsslinAdrian/Join'
    },
    {
      title: 'JetFire',
      skills: ['HTML', 'CSS', 'JavaScript'],
      discriptionDe: 'Ein 2D-Spiel, in dem Spieler Gegner bekämpfen und Hindernisse überwinden, um das Ziel zu erreichen. Actionreich und objektorientiert.',
      image: '/images/projects/jetfire_laptop.png',
      popupImage: '/images/projects/jetFire.png',
      link: 'https://adrian-ensslin.developerakademie.net/JetFire/',
      github: 'https://github.com/EnsslinAdrian/JetFire'
    },
    {
      title: 'DaBubble',
      skills: ['Angular', 'Firebase', 'SCSS', 'TypeScript'],
      discriptionDe: 'DaBubble ist ein moderner Chat-Messenger, inspiriert von Discord. Nutzer können in Echtzeit Nachrichten senden, eigene Server und Kanäle erstellen und nahtlos mit anderen kommunizieren. Ideal für Teams, Communities und Freunde.',
      image: '/images/projects/dabubble_screen.png',
      popupImage: '/images/projects/daBubble.png',
      link: 'https://dabubble-380.developerakademie.net/angular-projects/dabubble/',
      github: 'https://github.com/EnsslinAdrian/DABubble'
    },
    // {
    //   title: 'Videoflix',
    //   skills: ['Angular', 'Django', 'Python', 'PostgreSQL', 'Redis'],
    //   discriptionDe: 'VideoFlix ist eine Streaming-Plattform, inspiriert von Netflix. Nutzer können Filme und Serien durchsuchen, abspielen und eigene Watchlists erstellen. Perfekt für eine realistische UI-Demo mit Fokus auf Medieninhalte.',
    //   image: '/images/projects/videoflix-screen.png',
    //   popupImage: '/images/projects/videoflix.png',
    //   link: 'https://videoflix-12345.web.app/',
    //   github: 'https://github.com/EnsslinAdrian/Videoflix-Frontend'
    // },
    {
      title: 'Onlineshop',
      skills: ['Angular', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'ERP Weclapp'],
      discriptionDe: 'FS Schleiftechnik ist ein spezialisierter E-Commerce-Shop für Naturstein- und Bodenprodukte. Der Shop ist direkt mit einem ERP-System verbunden und synchronisiert automatisch Produktdaten, Lagerbestände und Bestellungen. Ideal für den professionellen Vertrieb im Handwerksbereich mit Fokus auf Effizienz und Automatisierung.',
      image: '/images/projects/fs-laptop.png',
      popupImage: '/images/projects/fs_schleiftechnick.png',
      link: 'https://fs-schleiftechnik.de/',
      github: ''
    }
  ];
}
