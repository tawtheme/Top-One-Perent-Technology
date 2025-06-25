import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgxParticlesModule } from '@tsparticles/angular';
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, NgxParticlesModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('slideInOut', [
            state('collapsed', style({
                height: '0',
                opacity: '0',
                overflow: 'hidden',
                paddingTop: '0',
                paddingBottom: '0'
            })),
            state('expanded', style({
                height: '*',
                opacity: '1'
            })),
            transition('collapsed <=> expanded', [
                animate('500ms ease-in-out')
            ])
        ]),
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms ease-in', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('300ms ease-out', style({ opacity: 0 }))
            ])
        ]),
        trigger('fadeImage', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms ease-in', style({ opacity: 1 }))
            ])
        ])
    ]
})

export class HomeComponent implements OnInit {
    services = [
        {
            title: 'Web Development',
            description: 'We create custom websites and web applications that are fast, secure, and user-friendly. Our development team uses the latest technologies to build scalable solutions.',
            imageUrl: 'assets/images/web-development.png'
        },
        {
            title: 'Branding',
            description: 'We help businesses establish a strong brand identity through strategic design, messaging, and visual elements that resonate with their target audience.',
            imageUrl: 'assets/images/web-development.png'
        },
        {
            title: 'SEO',
            description: 'Our SEO services help improve your website\'s visibility in search engines, driving more organic traffic and increasing your online presence.',
            imageUrl: 'assets/images/web-development.png'
        },
        {
            title: 'Digital Ads',
            description: 'We manage digital advertising campaigns across various platforms to help you reach your target audience and achieve your marketing goals.',
            imageUrl: 'assets/images/web-development.png'
        }
    ];

    selectedService: any;
    faqs = [
        {
            question: 'What services do you offer?',
            answer: 'We offer web development, branding, SEO, and digital advertising services to help businesses grow their online presence.',
            open: true
        },
        {
            question: 'How long does a project take?',
            answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-3 months.',
            open: false
        },
        {
            question: 'Do you provide ongoing support?',
            answer: 'Yes, we offer ongoing support and maintenance packages to ensure your website continues to perform optimally.',
            open: false
        },
        {
            question: 'How long does a project take?',
            answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-3 months.',
            open: false
        },
        {
            question: 'Do you provide ongoing support?',
            answer: 'Yes, we offer ongoing support and maintenance packages to ensure your website continues to perform optimally.',
            open: false
        }
    ];

    id = "tsparticles";
    particlesOptions = {
        fpsLimit: 180,
        interactivity: {
            events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' },
                resize: { enable: true }
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.8 }
            }
        },
        particles: {
            number: { value: 250 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: .25, max: 2 } },
            move: {
                enable: true,
                speed: 3,
                direction: "none" as "none",
                outModes: { default: "bounce" as "bounce" },
                random: false,
                straight: false
            },
            links: {
                enable: true,
                color: "#ffffff",
                distance: 200,
                opacity: 0.3,
                width: 1
            }
        },
        detectRetina: true
    };

    constructor(private readonly ngParticlesService: NgParticlesService) {}

    async ngOnInit() {
        await this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });

        this.selectedService = this.services[0];
    }

    selectService(service: any) {
        this.selectedService = service;
    }

    toggleFaq(index: number) {
        this.faqs[index].open = !this.faqs[index].open;
    }
}
