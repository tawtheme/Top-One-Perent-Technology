import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-application',
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-application.component.html',
  styleUrl: './mobile-application.component.scss'
})
export class MobileApplicationComponent {
  faqs = [
    {
      question: 'What is the difference between native and cross-platform mobile app development?',
      answer: 'Native mobile app development creates separate apps for iOS (using Swift/SwiftUI) and Android (using Kotlin/Jetpack Compose) with platform-specific features and optimal performance. Cross-platform development uses frameworks like React Native and Flutter to build one codebase that works on both platforms, reducing development time and cost while maintaining good performance.',
      open: true
    },
    {
      question: 'How long does it take to develop a mobile application?',
      answer: 'Mobile app development timelines vary based on complexity. Simple apps with basic features take 3-6 weeks, while complex applications with advanced functionality can take 3-6 months. Factors affecting timeline include platform requirements, feature complexity, third-party integrations, and testing phases. We provide detailed project timelines during our initial consultation.',
      open: false
    },
    {
      question: 'What is App Store Optimization (ASO) and why is it important?',
      answer: 'App Store Optimization (ASO) is the process of optimizing mobile apps to rank higher in app store search results. It includes keyword optimization, compelling app descriptions, high-quality screenshots, positive reviews, and regular updates. ASO is crucial for increasing app visibility, downloads, and organic growth without paid advertising.',
      open: false
    },
    {
      question: 'Do you provide ongoing mobile app maintenance and support?',
      answer: 'Yes, we offer comprehensive mobile app maintenance and support services including regular updates, bug fixes, performance optimization, security patches, and feature enhancements. Our maintenance packages ensure your app stays current with the latest platform updates and continues to provide excellent user experience.',
      open: false
    },
    {
      question: 'How much does mobile app development cost?',
      answer: 'Mobile app development costs range from $15,000 to $100,000+ depending on complexity, features, platforms, and development approach. Simple apps cost $15,000-$30,000, while complex enterprise applications can exceed $100,000. We provide detailed cost estimates based on your specific requirements and project scope.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
} 