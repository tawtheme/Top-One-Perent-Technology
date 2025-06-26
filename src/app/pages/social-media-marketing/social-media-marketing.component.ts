import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media-marketing',
  imports: [CommonModule],
  templateUrl: './social-media-marketing.component.html',
  styleUrl: './social-media-marketing.component.scss'
})
export class SocialMediaMarketingComponent {
  faqs = [
    {
      question: 'Which social media platforms do you manage?',
      answer: 'We manage campaigns across all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube, tailoring content and strategies to each platform\'s unique audience and features.',
      open: true
    },
    {
      question: 'How do you measure the success of social media campaigns?',
      answer: 'We track key metrics including engagement rates, reach, impressions, click-through rates, conversions, and ROI. We provide detailed analytics reports and insights to optimize performance.',
      open: false
    },
    {
      question: 'Do you create content or just manage campaigns?',
      answer: 'We provide comprehensive services including content creation, graphic design, copywriting, campaign management, community engagement, and performance analysis to ensure complete social media success.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
} 