import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Leaderboard } from 'src/app/model/leaderboard';
import { Profile } from 'src/app/model/profile';
import { FakeEndpointsService } from 'src/app/services/fake-endpoints.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() 
  cardModel!: TemplateRef<any>;


 

}
