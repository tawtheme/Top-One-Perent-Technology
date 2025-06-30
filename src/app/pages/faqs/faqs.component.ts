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
  faqOpen = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  faqs = [
    {
      question: 'What digital services do you offer for businesses?',
      answer: 'We offer comprehensive digital transformation services including custom web development, mobile app development (iOS & Android), UI/UX design, social media marketing, SEO optimization, digital advertising, and business consulting. Our full-service approach helps businesses establish a strong online presence and drive growth through technology.'
    },
    {
      question: 'How much does web development cost and what factors affect pricing?',
      answer: 'Web development costs range from $5,000 for simple websites to $50,000+ for complex applications. Factors include design complexity, functionality requirements, e-commerce features, third-party integrations, and ongoing maintenance. We provide transparent pricing with detailed breakdowns and no hidden costs.'
    },
    {
      question: 'What is the difference between UI design and UX design?',
      answer: 'UI (User Interface) design focuses on visual elements like colors, typography, buttons, and layout aesthetics. UX (User Experience) design focuses on user journey, usability, and how users interact with the product. We provide both services to create comprehensive, user-centered design solutions that are both beautiful and functional.'
    },
    {
      question: 'How long does mobile app development take and what platforms do you support?',
      answer: 'Mobile app development typically takes 3-6 months depending on complexity. We develop for iOS (Swift/SwiftUI), Android (Kotlin/Jetpack Compose), and cross-platform solutions using React Native and Flutter. Our process includes user research, design, development, testing, and app store submission.'
    },
    {
      question: 'What social media platforms should my business be on and how much does social media marketing cost?',
      answer: 'Platform choice depends on your target audience: Facebook/Instagram for B2C, LinkedIn for B2B, TikTok for younger demographics. Social media marketing costs range from $500-$1,500/month for basic management to $2,000-$10,000+/month for comprehensive campaigns with paid advertising.'
    },
    {
      question: 'How do you measure the success of digital marketing campaigns?',
      answer: 'We track comprehensive metrics including website traffic, conversion rates, engagement rates, ROI, click-through rates, and lead generation. For SEO, we monitor search rankings, organic traffic, and keyword performance. For social media, we track engagement, reach, and audience growth. We provide detailed monthly reports with actionable insights.'
    },
    {
      question: 'What is SEO and how long does it take to see results?',
      answer: 'SEO (Search Engine Optimization) improves your website\'s visibility in search results. Results typically appear within 3-6 months, with significant improvements in 6-12 months. We focus on technical SEO, content optimization, local SEO, and link building to increase organic traffic and search rankings.'
    },
    {
      question: 'Do you provide ongoing support and maintenance for websites and apps?',
      answer: 'Yes, we offer comprehensive support packages including regular updates, security patches, performance optimization, bug fixes, and 24/7 technical support. We also provide hosting, domain management, SSL certificates, and monitoring services to ensure your digital assets remain secure and perform optimally.'
    },
    {
      question: 'What technologies and frameworks do you use for development?',
      answer: 'We use modern, scalable technologies: Frontend (React, Angular, Vue.js), Backend (Node.js, Python, PHP, .NET), Mobile (React Native, Flutter, Swift, Kotlin), Databases (MySQL, PostgreSQL, MongoDB), and Cloud platforms (AWS, Azure, Google Cloud). We choose the optimal tech stack based on project requirements.'
    },
    {
      question: 'Can you work with existing systems and integrate with third-party services?',
      answer: 'Absolutely! We specialize in system integration and can work with legacy systems, APIs, databases, CRM platforms, payment gateways, and third-party services. We ensure seamless integration while maintaining data security and system performance.'
    },
    {
      question: 'How do you ensure project quality and meet deadlines?',
      answer: 'We follow industry best practices including agile methodology, code reviews, automated testing, continuous integration, and regular client feedback. Our project management includes milestone tracking, weekly updates, and quality checkpoints to ensure on-time delivery and high-quality results.'
    },
    {
      question: 'What is the typical project timeline and development process?',
      answer: 'Our development process includes discovery, planning, design, development, testing, and launch phases. Simple websites take 2-4 weeks, complex applications 3-6 months, and mobile apps 2-4 months. We provide detailed timelines and regular updates throughout the project.'
    },
    {
      question: 'Do you provide hosting, domain, and security services?',
      answer: 'Yes, we offer complete hosting solutions including domain registration, SSL certificates, CDN setup, security monitoring, and 99.9% uptime guarantees. We also provide website migration services and ongoing server management to keep your digital assets secure and performing optimally.'
    },
    {
      question: 'How do I get started with a project and what information do you need?',
      answer: 'Getting started is easy! Contact us for a free consultation where we discuss your business goals, requirements, timeline, and budget. We\'ll analyze your needs and provide a detailed proposal with project scope, timeline, and pricing. Once approved, we begin development with regular updates.'
    },
    {
      question: 'What makes your digital services different from competitors?',
      answer: 'We combine technical expertise with business strategy to deliver results-driven solutions. Our full-service approach, transparent communication, proven methodologies, and ongoing support ensure long-term success. We focus on ROI and measurable outcomes rather than just delivering projects.'
    }
  ];

  toggleFAQ(index: number) {
    this.faqOpen[index] = !this.faqOpen[index];
  }
}
