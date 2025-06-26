import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [NgxParticlesModule],
  template: `
    <ngx-particles [id]="id" [options]="particlesOptions" class="particles-bg"></ngx-particles>
  `,
  styleUrls: ['./particles-background.component.scss']
})
export class ParticlesBackgroundComponent {
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
}