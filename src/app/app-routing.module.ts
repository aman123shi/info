import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReviewUserComponent } from './pages/review-user/review-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'review', component: ReviewUserComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
