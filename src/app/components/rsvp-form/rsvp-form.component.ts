import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.scss'
})
export class RsvpFormComponent {
  rsvpForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    this.rsvpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      attending: ['yes', [Validators.required]],
      guests: ['1', [Validators.required]],
      message: ['']
    });
  }
  
  get f() {
    return this.rsvpForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.rsvpForm.invalid) {
      return;
    }
    
    console.log('Form submitted:', this.rsvpForm.value);
    // Here you would typically send the data to a backend service
    // For demo purposes, we'll just show a success message
    
    // Reset form after successful submission
    setTimeout(() => {
      this.submitted = false;
      this.rsvpForm.reset({
        attending: 'yes',
        guests: '1'
      });
    }, 3000);
  }
}
