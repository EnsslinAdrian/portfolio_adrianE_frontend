import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-icons',
  imports: [CommonModule],
  templateUrl: './skills-icons.component.html',
  styleUrl: './skills-icons.component.scss'
})
export class SkillsIconsComponent {

skill_images: string[] = [
  '/images/skills/html.png',
  '/images/skills/css.png',
  '/images/skills/javascript.png',
  '/images/skills/material.png',
  '/images/skills/typescript.png',
  '/images/skills/angular.png',
  '/images/skills/firebase.png',
  '/images/skills/git.png',
  '/images/skills/api.png',
  '/images/skills/scrum.png',
  '/images/skills/Linux.svg',
  '/images/skills/Python.svg',
  '/images/skills/Django.svg',
  '/images/skills/Redis.svg',
  '/images/skills/PostgresSQL.svg',
  '/images/skills/Docker.svg',
  '/images/skills/Google Cloud.svg',
  '/images/skills/Heroku.svg',
];

skill_name: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'Material Design',
  'TypeScript',
  'Angular',
  'Firebase',
  'GIT',
  'Rest-Api',
  'Srcum',
  'Linux',
  'Python',
  'Django',
  'Redis',
  'PostgreSQL',
  'Docker',
  'Cloud',
  'Heroku',
];

}
