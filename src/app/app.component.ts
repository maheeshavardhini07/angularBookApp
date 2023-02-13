import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  imgurl = '';
  btn: string;
  fullname = 'jothika';
  user = { name: 'jo' };
  onSave($event) {
    alert('event called');
    this.btn = 'event called';
  }
}
