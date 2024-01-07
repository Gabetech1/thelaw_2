import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';
import { AttorneysComponent } from './pages/attorneys/attorneys.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'practice-areas', component: PracticeAreasComponent },
  { path: 'attorneys', component: AttorneysComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
