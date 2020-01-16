
import { Injectable,EventEmitter } from '@angular/core';
import { Events } from 'ionic-angular';


@Injectable()
export class TestProvider {
public test:number = 21
  constructor(public events: Events) {

  }
  createUser(user) {
    console.log('User created!')
    this.events.publish('user:created2', user, Date.now());

  }
}
