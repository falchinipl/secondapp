
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackpackSectionRoutingModule } from './backpack-section-routing.module';
import { BackpackSectionComponent } from './backpack-section.component';






@NgModule({
  declarations: [
    BackpackSectionComponent,
  ],
  imports: [
    CommonModule,

    BackpackSectionRoutingModule
  ],
  exports:[BackpackSectionComponent],


})
export class BackpackSectionModule { }
