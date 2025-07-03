import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ui-ux-design',
  imports: [CommonModule, RouterModule],
  templateUrl: './ui-ux-design.component.html',
  styleUrl: './ui-ux-design.component.scss'
})
export class UiUxDesignComponent {
  faqs = [
    {
      question: 'What is the difference between UI design and UX design?',
      answer: 'UI (User Interface) design focuses on the visual elements and aesthetics of a product, including colors, typography, buttons, and layout. UX (User Experience) design focuses on the overall user journey, usability, and how users interact with the product. We provide both services to create comprehensive, user-centered design solutions that are both beautiful and functional.',
      open: true
    },
    {
      question: 'How long does a typical UI/UX design project take?',
      answer: 'UI/UX design project timelines vary based on complexity. A simple website redesign typically takes 4-6 weeks, while complex applications can take 8-12 weeks. Our process includes user research, wireframing, prototyping, visual design, and usability testing. We provide detailed project timelines during our initial consultation to ensure transparency and meet your business deadlines.',
      open: false
    },
    {
      question: 'Do you conduct user research and testing for UI/UX projects?',
      answer: 'Yes, user research and testing are fundamental to our UI/UX design process. We conduct user interviews, surveys, competitor analysis, and usability testing to understand your target audience. This research-driven approach ensures our designs solve real user problems and create meaningful experiences that drive engagement and conversions.',
      open: false
    },
    {
      question: 'What design tools and software do you use for UI/UX design?',
      answer: 'We use industry-leading design tools including Figma for collaborative design and prototyping, Adobe Creative Suite for advanced visual design, Sketch for macOS-based projects, and InVision for interactive prototypes. Our team stays updated with the latest design tools and methodologies to deliver cutting-edge UI/UX solutions.',
      open: false
    },
    {
      question: 'Can you help with responsive design and mobile-first UI/UX?',
      answer: 'Absolutely! We specialize in responsive design and mobile-first UI/UX approaches. We ensure your designs work seamlessly across all devices - from mobile phones to tablets and desktops. Our mobile-first methodology prioritizes the mobile experience while maintaining excellent functionality on larger screens, which is crucial for modern user engagement and SEO performance.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
} 