import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about.component';

const aboutRouting: Routes = [
    {
        path: '',
        component: AboutComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(aboutRouting)],
    exports: [RouterModule]
})
export class AboutRoutingModule{

}