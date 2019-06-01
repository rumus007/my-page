import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonBannerComponent } from './common-banner/common-banner.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContactMeComponent, AboutMeComponent, MyWorksComponent, JobHistoryComponent, PageNotFoundComponent, CommonBannerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, ContactMeComponent, AboutMeComponent, MyWorksComponent, JobHistoryComponent, PageNotFoundComponent, CommonBannerComponent]
})
export class SharedModule { }
