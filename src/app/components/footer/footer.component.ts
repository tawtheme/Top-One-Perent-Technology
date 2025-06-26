import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear: string = '';

  ngOnInit() {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    
    if (currentYear === startYear) {
      this.currentYear = startYear.toString();
    } else {
      this.currentYear = `${startYear} - ${currentYear}`;
    }
  }
}
