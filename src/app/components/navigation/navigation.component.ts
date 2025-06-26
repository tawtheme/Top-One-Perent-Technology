import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  mobileMenuOpen = false;
  mobileServicesDropdownOpen = false;
  servicesDropdownOpen = false;
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Close services dropdown when mobile menu is toggled
    if (!this.mobileMenuOpen) {
      this.mobileServicesDropdownOpen = false;
    }
  }

  toggleMobileServicesDropdown() {
    this.mobileServicesDropdownOpen = !this.mobileServicesDropdownOpen;
  }

  closeMobileServicesDropdown() {
    this.mobileServicesDropdownOpen = false;
  }

  toggleServicesDropdown() {
    this.servicesDropdownOpen = !this.servicesDropdownOpen;
  }

  openServicesDropdown() {
    this.servicesDropdownOpen = true;
  }

  closeServicesDropdown() {
    this.servicesDropdownOpen = false;
  }
}
