
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CardModule } from 'src/app/shared/card/card.module';

import { Step3Component } from './step3.component';


import { Step3RoutingModule } from './step3.routing.module';



@NgModule({
  declarations: [
    Step3Component
  ],
  imports: [
    CommonModule,
    CardModule,

    Step3RoutingModule
  ],
  exports:[Step3Component],


})
export class Step3Module { }
