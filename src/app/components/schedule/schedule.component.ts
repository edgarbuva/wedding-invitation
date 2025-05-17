import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ScheduleItem {
  time: string;
  title: string;
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  @Input() title: string = "Un vistazo a";
  @Input() subtitle: string = "nuestro día especial";
  @Input() backgroundImage: string = "/assets/images/couple-background.jpg";
  
  @Input() scheduleItems: ScheduleItem[] = [
    {
      time: '4:00 PM',
      title: 'Ceremonia'
    },
    {
      time: '6:00 PM',
      title: 'Cena'
    }
  ];
}
