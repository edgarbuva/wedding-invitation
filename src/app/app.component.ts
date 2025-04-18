import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RsvpFormComponent } from './components/rsvp-form/rsvp-form.component';
import { HeroComponent } from './components/hero/hero.component';

interface Countdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RsvpFormComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wedding-invitation';
  countdown: Countdown = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  };
  
  // Wedding date - July 14, 2025
  weddingDate = new Date('2025-07-14T16:00:00');
  
  // FAQs for the wedding
  faqs: FAQ[] = [
    {
      question: 'What time should I arrive?',
      answer: 'We recommend arriving 30 minutes before the ceremony, which starts promptly at 4:00 PM.'
    },
    {
      question: 'Is there parking available at the venue?',
      answer: 'Yes, there is complimentary valet parking available for all guests.'
    },
    {
      question: 'Is the venue wheelchair accessible?',
      answer: 'Yes, the venue is fully wheelchair accessible with ramps and elevators available.'
    },
    {
      question: 'Can I bring a plus one?',
      answer: 'Due to venue capacity, we can only accommodate the guests named on your invitation. Please indicate in your RSVP the exact number of guests attending.'
    },
    {
      question: 'Are children welcome?',
      answer: 'We love your little ones, but we have decided to make our wedding an adults-only occasion. We hope this gives all parents an opportunity to enjoy the evening.'
    },
    {
      question: 'What should I do if I have dietary restrictions?',
      answer: 'Please let us know of any dietary restrictions in the "Message" section of the RSVP form, and we will do our best to accommodate your needs.'
    }
  ];
  
  private countdownInterval: any;
  
  constructor() {}
  
  ngOnInit() {
    this.startCountdown();
  }
  
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  
  private startCountdown() {
    const updateCountdown = () => {
      const now = new Date();
      const diff = this.weddingDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        this.countdown = {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        };
        clearInterval(this.countdownInterval);
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      this.countdown = {
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      };
    };
    
    // Update countdown immediately and then every second
    updateCountdown();
    this.countdownInterval = setInterval(updateCountdown, 1000);
  }
}
