import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { FakeEndpointsService } from './fake-endpoints.service';
import { Observable } from 'rxjs';
import { Leaderboard } from '../model/leaderboard';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<Leaderboard>{




  constructor(private service: FakeEndpointsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Leaderboard> {
    if(state.url.includes('leaderboard')){
      return this.service.getLeaderboard();
    }
    return this.service.getAttendeeList();
  }

}
