import { Routes } from '@angular/router';
import { LandingPageComponent } from '../../front_end/common/landing-page/landing-page.component'; // Import component

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default entry point
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown routes
];
