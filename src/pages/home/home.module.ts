import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SexNamePipe } from '../../app/sex-name.pipe';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations:   [
    HomePageComponent,
    SexNamePipe,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' }
    ])
  ],
})
export class HomeModule { }