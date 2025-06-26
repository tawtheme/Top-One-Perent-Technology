import { Component, OnInit, HostListener } from '@angular/core';
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
    particlesOptions: any = {};
    isMobile = false;
    isTablet = false;
    isLaptop = false;
    isLargeDesktop = false;

    constructor(private readonly ngParticlesService: NgParticlesService) {}

    async ngOnInit() {
        this.updateParticlesOptions();
        
        await this.ngParticlesService.init(async (engine) => {
            await loadSlim(engine);
        });

        this.selectedService = this.services[0];
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.updateParticlesOptions();
    }

    private updateParticlesOptions() {
        const screenWidth = window.innerWidth;
        
        // Determine device type
        this.isMobile = screenWidth < 768;
        this.isTablet = screenWidth >= 768 && screenWidth < 1024;
        this.isLaptop = screenWidth >= 1024 && screenWidth < 1440;
        this.isLargeDesktop = screenWidth >= 1441;

        // Adjust particle count based on screen size
        let particleCount = 100;
        let linkDistance = 150;
        let repulseDistance = 150;
        let particleSize = { min: 0.25, max: 2 };

        if (this.isMobile) {
            particleCount = 80;
            linkDistance = 120;
            repulseDistance = 100;
            particleSize = { min: 0.1, max: 1.2 };
        } else if (this.isTablet) {
            particleCount = 100;
            linkDistance = 100;
            repulseDistance = 100;
            particleSize = { min: 0.1, max: 1.2 };
        } else if (this.isLaptop) {
            particleCount = 80;
            linkDistance = 100;
            repulseDistance = 100;
            particleSize = { min: 0.1, max: 1.2 };
        } else if (this.isLargeDesktop) {
            particleCount = 200;
            linkDistance = 220;
            repulseDistance = 220;
            particleSize = { min: 0.25, max: 2.5 };
        }

        this.particlesOptions = {
            fpsLimit: this.isMobile ? 60 : 180,
            interactivity: {
                events: {
                    onClick: { enable: !this.isMobile, mode: 'push' },
                    onHover: { enable: true, mode: 'repulse' },
                    resize: { enable: true }
                },
                modes: {
                    push: { quantity: this.isMobile ? 2 : 4 },
                    repulse: { distance: repulseDistance, duration: 0.8 }
                }
            },
            particles: {
                number: { value: particleCount },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: this.isMobile ? 0.3 : 0.4 },
                size: { value: particleSize },
                move: {
                    enable: true,
                    speed: this.isMobile ? 2 : 3,
                    direction: "none" as "none",
                    outModes: { default: "bounce" as "bounce" },
                    random: false,
                    straight: false
                },
                links: {
                    enable: true,
                    color: "#ffffff",
                    distance: linkDistance,
                    opacity: this.isMobile ? 0.2 : 0.3,
                    width: this.isMobile ? 0.5 : 1
                }
            },
            detectRetina: true
        };

        console.log('Particles options updated:', {
            screenWidth,
            isMobile: this.isMobile,
            isTablet: this.isTablet,
            isLaptop: this.isLaptop,
            isLargeDesktop: this.isLargeDesktop,
            particleCount,
            particlesOptions: this.particlesOptions
        });
    }

    selectService(service: any) {
        this.selectedService = service;
    }

    toggleFaq(index: number) {
        this.faqs[index].open = !this.faqs[index].open;
    }
}
