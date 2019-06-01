import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about.routing';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [AboutComponent, TechSkillsComponent, SoftSkillsComponent, EducationComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
