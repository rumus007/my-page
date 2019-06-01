import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { PortfolioComponent } from './portfolio.component';

const portfolioRouting: Routes = [
    {
        path: '',
        component: PortfolioComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(portfolioRouting)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule{

}