
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileResolverService } from 'src/app/services/profile.resolver.service';


const routes: Routes = [
    
        {
          path: '',
          loadChildren: () => import('./step1/step1.module').then(m => m.Step1Module)
        },
        {
          path: 'step2',
          /*resolve: {
            profile: ProfileResolverService
          },*/
          loadChildren: () => import('./step2/step2.module').then(m => m.Step2Module)
        },
        {
          path: 'step3',
          /*resolve: {
            profile: ProfileResolverService
          },*/
          loadChildren: () => import('./step3/step3.module').then(m => m.Step3Module)
        },
        
        {
          path: 'step4',
          /*resolve: {
            profile: ProfileResolverService
          },*/
          loadChildren: () => import('./step4/step4.module').then(m => m.Step4Module)
        }
   
  

  
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],


})
export class BackpackSectionRoutingModule { }
