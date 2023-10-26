import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFollowersComponent } from './pages/search-followers/search-followers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: SearchFollowersComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
