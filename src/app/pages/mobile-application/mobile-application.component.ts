import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-application',
  imports: [CommonModule],
  templateUrl: './mobile-application.component.html',
  styleUrl: './mobile-application.component.scss'
})
export class MobileApplicationComponent {
  faqs = [
    {
      question: 'What platforms do you develop mobile apps for?',
      answer: 'We develop mobile applications for both iOS and Android platforms, as well as cross-platform solutions using React Native, Flutter, and other modern frameworks.',
      open: true
    },
    {
      question: 'How long does it take to develop a mobile app?',
      answer: 'Mobile app development timelines typically range from 3-8 weeks for simple apps to 3-6 months for complex applications, depending on features and platform requirements.',
      open: false
    },
    {
      question: 'Do you provide app store submission and maintenance?',
      answer: 'Yes, we handle the complete app development lifecycle including app store submission, updates, and ongoing maintenance to keep your app current and functional.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
} 