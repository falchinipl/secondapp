
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/card/card.module';


import { Step4RoutingModule } from './step4.routing.module';

import { Step4Component } from './step4.component';



@NgModule({
  declarations: [
    Step4Component
  ],
  imports: [
    CommonModule,
    CardModule,
  
    Step4RoutingModule
  ],
  exports:[Step4Component],


})
export class Step4Module { }
