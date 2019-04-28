import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp2Component }from './comp2/comp2.component';
import { Comp2ListComponent }from './comp2-list/comp2-list.component';
import { Comp2DetailComponent }from './comp2-detail/comp2-detail.component';



const routes: Routes = [
  { path: '', component: Comp2Component },
  { path: 'comp2', component: Comp2Component,
      children: [
        { path: 'list', component: Comp2ListComponent},
        { path: 'detail/:id', component: Comp2DetailComponent}      
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
