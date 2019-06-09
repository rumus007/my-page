import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
const appRouting: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule' //lazy loading
    },
    {
        path: 'portfolio',
        loadChildren: './portfolio/portfolio.module#PortfolioModule' //lazy loading
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule' //lazy loading
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRouting, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule{

}