import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() backgroundImage: string = '/assets/images/hero-bg.jpg';
  @Input() coupleNames: string = 'Damaris & Edgar';
  @Input() weddingDate: string = '14 • 07 • 2025';
  @Input() description: string = 'ACOMPÁÑANOS EN NUESTRO VIAJE DE AMOR, ALEGRÍA Y FELICIDAD ETERNA.';
  @Input() rsvpLink: string = '#rsvp';
  @Input() rsvpButtonText: string = 'RSVP';
  
  // Nuevas propiedades para las fotos del diseño
  @Input() mainPhoto: string = '/assets/images/couple-main.jpg';
  @Input() sidePhotoLeft: string = '/assets/images/couple-side-1.jpg';
  @Input() sidePhotoRight: string = '/assets/images/couple-side-2.jpg';
}
