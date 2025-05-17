import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RsvpFormComponent } from './components/rsvp-form/rsvp-form.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LocationComponent } from './components/location/location.component';
import { CountdownComponent } from './components/countdown/countdown.component';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RsvpFormComponent, 
    HeroComponent, 
    ScheduleComponent,
    LocationComponent,
    CountdownComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wedding-invitation';
  
  // Wedding date - June 14, 2025
  weddingDate = new Date('2025-06-14T16:00:00');
  
  // FAQs for the wedding
  faqs: FAQ[] = [
    {
      question: '¿A qué hora debo llegar?',
      answer: '¡Nos encantaría recibirte! Te sugerimos llegar unos 30 minutos antes de la ceremonia, que comenzará puntualmente a las 4:00 PM, así tendrás tiempo de saludar a otros invitados y acomodarte tranquilamente.'
    },
    {
      question: '¿Hay estacionamiento disponible en el lugar?',
      answer: 'El salón no cuenta con estacionamiento propio, pero no te preocupes. Te recomendamos usar servicios como Uber o DiDi, o quizás coordinar con otros invitados para compartir transporte. ¡Así todos podremos disfrutar plenamente de la celebración sin preocupaciones!'
    },
    {
      question: '¿Puedo llevar a un acompañante?',
      answer: 'Nos encantaría poder recibir a más personas, pero debido al espacio limitado del salón, solo podemos acomodar a los invitados nombrados específicamente en tu invitación. ¡Gracias por tu comprensión!'
    },
    {
      question: '¿Se permite la asistencia de niños?',
      answer: 'Adoramos a los pequeños, pero hemos decidido que nuestra boda sea una celebración solo para adultos. Esperamos que esto les brinde a los papás una noche especial para relajarse y disfrutar. ¡Seguro te mereces una noche de diversión!'
    },
    {
      question: '¿Cuándo debo confirmar mi asistencia?',
      answer: '¡Tu presencia es muy importante para nosotros! Para poder organizarlo todo perfectamente, te pedimos confirmar tu asistencia con al menos 15 días de anticipación. Esto nos ayudará a que todo esté listo para recibirte y celebrar juntos este día tan especial.'
    },
    {
      question: '¿Cuál es el código de vestimenta?',
      answer: 'Nos encantaría que te unas a nuestra celebración con atuendo formal, pero no te preocupes, no es de etiqueta. ¡Lo importante es que te sientas cómodo y elegante para disfrutar de esta noche especial!'
    }
  ];
  
  constructor() {}
  
  ngOnInit() {
    // No countdown logic needed here anymore
  }
  
  ngOnDestroy() {
    // No countdown cleanup needed here anymore
  }
}
