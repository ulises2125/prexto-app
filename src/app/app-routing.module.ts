import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { PicturesComponent } from './pictures/pictures.component';
import { HomeComponent } from './home/home.component';
import { CreateeditComponent } from './createedit/createedit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'module-images',
    component: PicturesComponent,
  },
  {
    path: 'module-cats',
    component: CatsComponent,
  },
  {
    path: 'module-cats/create',
    component: CreateeditComponent,
  },
  {
    path: 'module-cats/:id',
    component: CreateeditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
