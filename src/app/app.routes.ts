import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { MobileApplicationComponent } from './pages/mobile-application/mobile-application.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'mobile-application', component: MobileApplicationComponent },
  { path: '**', redirectTo: '' }
];
