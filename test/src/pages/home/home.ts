import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestProvider } from '../../providers/test'
import { Test2Provider } from '../../providers/test2'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public test:number = this.Test.test 
  constructor(public navCtrl: NavController,
              public Test: TestProvider,
              public Test2: Test2Provider) {
this.Test.createUser('ROY')
this.Test2.events
  }

}
