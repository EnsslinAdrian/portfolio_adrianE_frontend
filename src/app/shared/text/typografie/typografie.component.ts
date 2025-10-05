import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typografie',
  imports: [
    CommonModule
  ],
  templateUrl: './typografie.component.html',
  styleUrl: './typografie.component.scss'
})
export class TypografieComponent {
  @Input() text: string | undefined = '';
  @Input() lineHeight: string = '1.2';
  @Input() size: 'xsmall' |'small' | 'medium' | 'xmedium' | 'large' = 'xmedium';
  @Input() color: 'white' | 'black' | 'green' | 'red' | 'dark-white' = 'black';
  @Input() weight: 400 | 600 | 700 | 800 = 400;
  @Input() align: 'left' | 'center' | 'right' = 'left';
  @Input() font: 'fira' | 'karla' = 'fira';

  // Code Example:
  // <app-typography
  //    text="Hello World"
  //    size="large"
  //    color="white"
  //    [weight]="600"
  //    [align]="'left'"
  //    [font]="'fira'">
  // </app-typography>
}
