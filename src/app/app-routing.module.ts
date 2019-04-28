import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';


const mainRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent, children: [
      { path: 'comp1', loadChildren: './module1/module1.module#Module1Module' },
      { path: 'comp2', loadChildren: './module2/module2.module#Module2Module' }
    ]
  },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    mainRoutes,
    {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
