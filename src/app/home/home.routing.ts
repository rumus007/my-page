import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home.component';

const homeRouting: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(homeRouting)],
    exports: [RouterModule]
})
export class HomeRoutingModule{

}