import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { BrandComponent } from './brand/brand.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, BrandComponent, MySkillsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
