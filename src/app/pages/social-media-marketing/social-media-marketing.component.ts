import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-social-media-marketing',
  imports: [CommonModule, RouterModule],
  templateUrl: './social-media-marketing.component.html',
  styleUrl: './social-media-marketing.component.scss'
})
export class SocialMediaMarketingComponent {
  faqs = [
    {
      question: 'Which social media platforms should my business be on?',
      answer: 'The best platforms depend on your target audience and business type. Facebook and Instagram are great for B2C businesses, LinkedIn for B2B companies, TikTok for younger demographics, and YouTube for video content. We analyze your audience demographics and business goals to recommend the most effective platforms for your social media marketing strategy.',
      open: true
    },
    {
      question: 'How much does social media marketing cost?',
      answer: 'Social media marketing costs vary based on services needed. Basic management starts at $500-$1,500/month, while comprehensive campaigns with paid advertising range from $2,000-$10,000+/month. Costs include content creation, community management, paid ads, and analytics. We provide custom pricing based on your specific needs and goals.',
      open: false
    },
    {
      question: 'How long does it take to see results from social media marketing?',
      answer: 'Social media marketing results typically appear within 1-3 months. Organic growth takes longer (3-6 months), while paid advertising can show immediate results. We focus on building authentic engagement and brand awareness, which creates sustainable long-term growth rather than quick but temporary spikes.',
      open: false
    },
    {
      question: 'What metrics do you track for social media success?',
      answer: 'We track comprehensive metrics including engagement rates, reach, impressions, click-through rates, conversions, follower growth, and ROI. For paid campaigns, we monitor cost per click (CPC), cost per acquisition (CPA), and return on ad spend (ROAS). We provide detailed monthly reports with actionable insights to optimize performance.',
      open: false
    },
    {
      question: 'Do you create all the content or do we need to provide it?',
      answer: 'We provide complete content creation services including graphic design, copywriting, video production, and photography. However, we can also work with your existing content or collaborate with your team. Our content strategy is tailored to your brand voice and optimized for each platform\'s best practices.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
} 