import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Comp2Component } from './comp2/comp2.component';
import { Comp2ListComponent } from './comp2-list/comp2-list.component';
import { Comp2DetailComponent } from './comp2-detail/comp2-detail.component';

@NgModule({
  declarations: [Comp2Component, Comp2ListComponent, Comp2DetailComponent],
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  exports: [Comp2Component, Comp2ListComponent, Comp2DetailComponent]
})
export class Module2Module { }
