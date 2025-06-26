import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-ux-design',
  imports: [CommonModule],
  templateUrl: './ui-ux-design.component.html',
  styleUrl: './ui-ux-design.component.scss'
})
export class UiUxDesignComponent {
  faqs = [
    {
      question: 'What design tools and methodologies do you use?',
      answer: 'We use industry-standard tools like Figma, Adobe XD, and Sketch, along with design systems, user research, wireframing, and prototyping methodologies to create exceptional user experiences.',
      open: true
    },
    {
      question: 'How do you ensure the design meets user needs?',
      answer: 'We conduct thorough user research, create personas, perform usability testing, and iterate based on feedback to ensure our designs are intuitive, accessible, and meet real user needs.',
      open: false
    },
    {
      question: 'Do you provide design systems and style guides?',
      answer: 'Yes, we create comprehensive design systems, component libraries, and style guides that ensure consistency across all touchpoints and make future development more efficient.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
} 