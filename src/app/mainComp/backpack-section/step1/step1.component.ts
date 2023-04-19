import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prize } from 'src/app/model/prize';
import { FakeEndpointsService } from 'src/app/services/fake-endpoints.service';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  currentUrl: string | undefined;
  prizes?:Prize[] = [];
  currentPrize?: Prize;
  prize?:Prize;

  
  constructor(private router: Router, private fakeEndpoint: FakeEndpointsService){
    
  }

  getBackpack(){
    this.fakeEndpoint.getBackpack().subscribe((data) => {
      this.prizes = data.prizes;
      console.log(this.prizes)
    })
  }

  getCurrentPrize(i: Number){


    let count = 0;
    count +=1;
    this.prizes?.forEach((element:any, index:any) => {
      if(index === i){
        this.prize = element;
      }
      
    })
    //this.router.navigate([`${this.currentUrl}/detail`, {profileId: this.currentProfile.profileId}])

  }

  ngOnInit(){
    this.currentUrl = this.router.url;
    this.getBackpack();
  }



 


goToStep(){
  this.router.navigate([`${this.currentUrl}/step2`]);
}

    

}
