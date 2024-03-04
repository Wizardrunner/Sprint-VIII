// src/app/full-calendar/full-calendar.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [FullCalendarModule], // Importa FullCalendarModule aquí para Angular 17 standalone
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements AfterViewInit {
  calendarOptions: any = {
    plugins: [dayGridPlugin, interactionPlugin], // Añade los plugins necesarios aquí
    initialView: 'dayGridMonth',
    events: [] // Inicialmente no hay eventos
  };

  constructor(private eventService: EventService) {}

  ngAfterViewInit() {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      // Solo actualiza la propiedad events de calendarOptions
      this.calendarOptions.events = events;
    });
  }
}
