import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp1ListComponent } from './comp1-list/comp1-list.component';
import { Comp1DetailComponent } from './comp1-detail/comp1-detail.component';

@NgModule({
  declarations: [Comp1Component, Comp1ListComponent, Comp1DetailComponent],
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  exports: [Comp1Component, Comp1ListComponent, Comp1DetailComponent]
})
export class Module1Module { }
