import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  faqOpen = [true, false, false, false, false, false, false, false, false, false];

  faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive digital services including web development, mobile app development, UI/UX design, social media marketing, SEO optimization, and digital consulting. Our team specializes in creating modern, scalable solutions that drive business growth.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, complex web applications 3-6 months, and mobile apps 2-4 months. We provide detailed timelines during consultation and keep you updated throughout development.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing: fixed-price projects, hourly rates, and retainer agreements. Pricing depends on scope, complexity, and timeline. We provide transparent quotes after understanding your requirements and never surprise you with hidden costs.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including regular updates, security patches, performance monitoring, and 24/7 technical support. We also provide training and documentation to help your team manage solutions effectively.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies: React, Angular, Node.js, Python, PHP, Flutter, React Native, and cloud platforms like AWS, Azure, and Google Cloud. We choose the best stack for each project based on requirements and scalability needs.'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow industry best practices: code reviews, automated testing, continuous integration, and regular client feedback. Our development process includes multiple quality checkpoints and we maintain high coding standards throughout.'
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing systems and can work with legacy code, APIs, databases, and third-party services. We ensure seamless integration while maintaining system stability and performance.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we offer complete hosting solutions including domain registration, SSL certificates, CDN setup, and ongoing server management. We can also migrate existing sites and provide 99.9% uptime guarantees with 24/7 monitoring.'
    },
    {
      question: 'What about SEO and digital marketing?',
      answer: 'We provide comprehensive digital marketing services: SEO optimization, social media management, PPC campaigns, content marketing, and analytics. We help improve your online visibility and drive targeted traffic to your website.'
    },
    {
      question: 'How do I get started with a project?',
      answer: 'Getting started is easy! Contact us for a free consultation where we discuss your requirements, timeline, and budget. We\'ll provide a detailed proposal and project plan. Once approved, we begin development with regular updates and milestones.'
    }
  ];

  toggleFAQ(index: number) {
    this.faqOpen[index] = !this.faqOpen[index];
  }
}
