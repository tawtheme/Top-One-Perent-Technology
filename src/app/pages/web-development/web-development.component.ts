import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web-development',
  imports: [CommonModule, RouterModule],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent {
  faqs = [
    {
      question: 'What technologies do you use for web development?',
      answer: 'We use modern technologies including Angular, React, Node.js, and various other frameworks and tools to create scalable and efficient web applications.',
      open: true
    },
    {
      question: 'How long does it take to complete a web development project?',
      answer: 'Project timelines vary depending on complexity and requirements. Simple websites can take 2-4 weeks, while complex applications may take 2-6 months.',
      open: false
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your website continues to perform optimally after launch.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
