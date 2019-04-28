import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App Component
import { Comp1Component } from './comp1/comp1.component';
import { Comp1ListComponent } from './comp1-list/comp1-list.component';
import { Comp1DetailComponent } from './comp1-detail/comp1-detail.component';

const routes: Routes = [
  { path: '', component: Comp1Component },
  { path: 'comp1', component: Comp1Component,
      children: [
        { path: 'list', component: Comp1ListComponent},
        { path: 'detail/:id', component: Comp1DetailComponent}      
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
