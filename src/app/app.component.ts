import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/layout/header/header.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { MetaService } from '../service/meta/meta.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(public metaService: MetaService) {}
}
