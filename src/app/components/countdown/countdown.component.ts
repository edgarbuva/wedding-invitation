import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CountdownComponent implements OnInit, OnDestroy {
  countdown: CountdownTime = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  };
  
  private subscription: Subscription | null = null;
  
  // La fecha objetivo - 14 de junio de 2025 a las 16:00
  private targetDate = new Date('2025-06-14T16:00:00');
  
  ngOnInit(): void {
    this.updateCountdown();
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;
    
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      this.countdown = {
        days: days.toString(),
        hours: hours.toString(),
        minutes: minutes.toString(),
        seconds: seconds.toString()
      };
    } else {
      this.countdown = { days: '0', hours: '0', minutes: '0', seconds: '0' };
    }
  }
} 