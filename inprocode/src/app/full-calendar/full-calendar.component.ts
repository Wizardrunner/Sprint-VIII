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
  calendarOptions: any;

  constructor(private eventService: EventService) {
    // Inicialización de calendarOptions aquí para acceso a métodos de instancia
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: [],
      dateClick: this.handleDateClick.bind(this), // Maneja clic en fecha
      eventClick: this.handleEventClick.bind(this), // Maneja clic en evento
      displayEventTime: false, // No mostrar la hora del evento junto al título
    };
  }

  ngAfterViewInit() {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.calendarOptions.events = events;
    });
  }

  handleDateClick(arg: any): void {
    const title = prompt('Título del Evento:');
    const startDate = arg.dateStr; // Fecha seleccionada para el inicio
    let endDate = prompt('Fecha de finalización del Evento (YYYY-MM-DD):', arg.dateStr); // Fecha de finalización

    // Si el usuario cancela el prompt de endDate, usa startDate como endDate.
    endDate = endDate ?? startDate;

    let startTime = prompt('Hora de inicio (HH:MM):', '00:00') ?? '00:00';
    let endTime = prompt('Hora de fin (HH:MM):', '23:59') ?? '23:59';

    // Asegurarse de que las horas sean válidas
    if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(startTime)) {
      alert("Hora de inicio no válida. Formato correcto HH:MM.");
      return;
    }
    if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(endTime)) {
      alert("Hora de fin no válida. Formato correcto HH:MM.");
      return;
    }

    // Combinar fecha con hora
    const startDateTime = `${startDate}T${startTime}`;
    const endDateTime = `${endDate}T${endTime}`;

    if (title) {
        const newEvent = { 
            title, 
            start: startDateTime,
            end: endDateTime
        };

        this.eventService.addEvent(newEvent).subscribe(() => {
            this.loadEvents(); // Recarga los eventos
        }, error => {
            console.error('Error al añadir el evento:', error);
            alert('Hubo un problema al añadir el evento.');
        });
    }
}
    
  handleEventClick(clickInfo: any): void {
    if (confirm(`¿Estás seguro de que quieres eliminar el evento '${clickInfo.event.title}'?`)) {
      this.eventService.deleteEvent(clickInfo.event.id).subscribe(() => {
        clickInfo.event.remove(); // Elimina el evento del calendario
        // No es necesario llamar a loadEvents aquí, ya que estamos eliminando el evento directamente del calendario
      });
    }
  }
}
