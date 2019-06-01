import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { PortfolioRoutingModule } from './portfolio.routing';
import { CertificatesComponent } from './certificates/certificates.component';

@NgModule({
  declarations: [PortfolioComponent, CertificatesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
