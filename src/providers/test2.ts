import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class Test2Provider {

  
  constructor(public events: Events) {
     events.subscribe('user:created2', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user, 'at', time);
    });
  }

  
  
}
