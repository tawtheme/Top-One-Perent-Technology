import { Component } from '@angular/core';
import { ParticlesBackgroundComponent } from '../../components/particles-background/particles-background.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ParticlesBackgroundComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
