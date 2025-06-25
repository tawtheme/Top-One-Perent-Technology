import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  faqOpen: boolean[] = [false, false, false, false, false, false];

  toggleFAQ(index: number) {
    this.faqOpen[index] = !this.faqOpen[index];
  }
}
