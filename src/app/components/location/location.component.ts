import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  @Input() title: string = 'UBICACIÓN';
  @Input() venueName: string = 'HACIENDA LOS OLIVOS HOTEL & RESTAURANT';
  @Input() venueAddress: string = 'CARRETERA NACIONAL KM 15, MONTERREY, MÉXICO';
  @Input() venueImage: string = '/assets/images/couple-location.jpg';
  @Input() mapsLinkText: string = 'TRAVEL & STAY';
  @Input() mapsLink: string = 'https://maps.google.com';
}
