import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutVideo') aboutVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('expertiseSection') expertiseSection!: ElementRef<HTMLElement>;

  // Counter values
  projectsCompleted = 0;
  clientSatisfaction = 0;
  yearsExperience = 0;
  supportAvailable = 0;

  // Target values
  targetProjects = 120;
  targetSatisfaction = 98;
  targetYears = 8;
  targetSupport = 24;

  ngAfterViewInit() {
    this.ensureVideoAutoplay();
    this.setupCounterAnimation();
  }

  private ensureVideoAutoplay() {
    const video = this.aboutVideo?.nativeElement;
    if (!video) return;

    // Try to play the video immediately
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Video autoplay successful');
        })
        .catch((error) => {
          console.log('Autoplay failed, trying alternative approach:', error);
          this.handleAutoplayFailure(video);
        });
    }

    // Add event listeners for better autoplay handling
    video.addEventListener('loadstart', () => {
      console.log('Video load started');
    });

    video.addEventListener('canplay', () => {
      console.log('Video can play');
      video.play().catch(error => {
        console.log('Play failed on canplay event:', error);
      });
    });

    video.addEventListener('loadeddata', () => {
      console.log('Video data loaded');
      video.play().catch(error => {
        console.log('Play failed on loadeddata event:', error);
      });
    });
  }

  private handleAutoplayFailure(video: HTMLVideoElement) {
    // Try playing on user interaction
    const playOnInteraction = () => {
      video.play().then(() => {
        console.log('Video started playing on user interaction');
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
      }).catch(error => {
        console.log('Still failed to play:', error);
      });
    };

    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);

    // Also try playing when the video becomes visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(error => {
            console.log('Play failed on intersection:', error);
          });
        }
      });
    });

    observer.observe(video);
  }

  private setupCounterAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounterAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (this.expertiseSection?.nativeElement) {
      observer.observe(this.expertiseSection.nativeElement);
    }
  }

  private startCounterAnimation() {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    // Projects counter
    const projectsStep = this.targetProjects / steps;
    const projectsInterval = setInterval(() => {
      this.projectsCompleted += projectsStep;
      if (this.projectsCompleted >= this.targetProjects) {
        this.projectsCompleted = this.targetProjects;
        clearInterval(projectsInterval);
      }
    }, stepDuration);

    // Satisfaction counter
    const satisfactionStep = this.targetSatisfaction / steps;
    const satisfactionInterval = setInterval(() => {
      this.clientSatisfaction += satisfactionStep;
      if (this.clientSatisfaction >= this.targetSatisfaction) {
        this.clientSatisfaction = this.targetSatisfaction;
        clearInterval(satisfactionInterval);
      }
    }, stepDuration);

    // Years counter
    const yearsStep = this.targetYears / steps;
    const yearsInterval = setInterval(() => {
      this.yearsExperience += yearsStep;
      if (this.yearsExperience >= this.targetYears) {
        this.yearsExperience = this.targetYears;
        clearInterval(yearsInterval);
      }
    }, stepDuration);

    // Support counter
    const supportStep = this.targetSupport / steps;
    const supportInterval = setInterval(() => {
      this.supportAvailable += supportStep;
      if (this.supportAvailable >= this.targetSupport) {
        this.supportAvailable = this.targetSupport;
        clearInterval(supportInterval);
      }
    }, stepDuration);
  }
}
