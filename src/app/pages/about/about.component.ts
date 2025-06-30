import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutVideo') aboutVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.ensureVideoAutoplay();
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
}
