// src/app/full-calendar/full-calendar.component.ts
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [FullCalendarModule], 
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements AfterViewInit {
  calendarOptions: any;

  constructor(private eventService: EventService, private elRef: ElementRef) {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: [],
      dateClick: this.handleDateClick.bind(this), 
      eventClick: this.handleEventClick.bind(this), 
      displayEventTime: false, 
    };
  }

  ngAfterViewInit() {
    this.loadEvents();
    // Espera a que los eventos se carguen y el calendario se inicialice completamente
    setTimeout(() => {
      this.addDividerUnderTitle();
      this.customizeCalendarHeader(); 
      this.customizeCalendarTitle();
    }, 0);
  }
  
  loadEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.calendarOptions.events = events;
    });
  }

  private addDividerUnderTitle() {
  
    const calendarContainer = this.elRef.nativeElement.querySelector('.fc-header-toolbar');
    if (calendarContainer) {
      const divider = document.createElement('div');
      divider.className = 'divider';
      divider.style.width = '100%';
      divider.style.marginBottom = '30px'; 
      divider.style.height = '1px';
      divider.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))';
      calendarContainer.after(divider); 
    }
  }
  private customizeCalendarHeader() {
    setTimeout(() => { 
      const headerElement = this.elRef.nativeElement.querySelector('.fc-header-toolbar');
      if (headerElement) {
        headerElement.style.display = 'flex';
        headerElement.style.justifyContent = 'space-between';
        headerElement.style.alignItems = 'center';
        headerElement.style.margin = '20px 40px';
        headerElement.style.height = '60px';
      }
    }, 0);
  }
  
  private customizeCalendarTitle() {
    setTimeout(() => { 
      const titleElement = this.elRef.nativeElement.querySelector('.fc-toolbar-title');
      if (titleElement) {
        titleElement.style.margin = '0 0 16px'; 
      }
    }, 0);
  }
  

  handleDateClick(arg: any): void {
    const title = prompt('Título del Evento:');
    const startDate = arg.dateStr; 
    let endDate = prompt('Fecha de finalización del Evento (YYYY-MM-DD):', arg.dateStr); 

    endDate = endDate ?? startDate;

    let startTime = prompt('Hora de inicio (HH:MM):', '00:00') ?? '00:00';
    let endTime = prompt('Hora de fin (HH:MM):', '23:59') ?? '23:59';

    if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(startTime)) {
      alert("Hora de inicio no válida. Formato correcto HH:MM.");
      return;
    }
    if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(endTime)) {
      alert("Hora de fin no válida. Formato correcto HH:MM.");
      return;
    }

    const startDateTime = `${startDate}T${startTime}`;
    const endDateTime = `${endDate}T${endTime}`;

    if (title) {
        const newEvent = { 
            title, 
            start: startDateTime,
            end: endDateTime
        };

        this.eventService.addEvent(newEvent).subscribe(() => {
            this.loadEvents(); 
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
      });
    }
  }
}
