import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserConnectionEventService {

  private setUserConnectivitySource: Subject<boolean> = new Subject<boolean>();
  userConnectionChanged = this.setUserConnectivitySource.asObservable();

  setUserConnectivity(isConnected: boolean) {
    console.log(`user connected`);
    this.setUserConnectivitySource.next(isConnected);
  }
}
