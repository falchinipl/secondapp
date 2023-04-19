import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';


import { FakeEndpointsService } from 'src/app/services/fake-endpoints.service';
let count = 0;
@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {
  currentUrl: string | undefined;

  
  constructor(private apiService: FakeEndpointsService, private router: Router,private fb: FormBuilder){
   
  }

  ngOnInit(){
    this.currentUrl = this.router.url;
  }

  goToStep(){
    this.router.navigate([`backpack/step3`]);
  }
  

  ngOnDestroy(){
    //this.router.navigate([`/`])
  }
}
