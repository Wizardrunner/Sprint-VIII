// src/app/full-calendar.component.ts
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component'; 

@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './full-calendar.component.html',
  styleUrl: './full-calendar.component.scss'
})
export class FullCalendarComponent {

}
