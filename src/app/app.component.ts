import { GscService } from './services/gsc.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'car-dealer-ui';
  opened: boolean;
  toggle = false;
  block = 'block';
  none = 'none';

  ngOnInit(){
    
  }
  constructor(private gscService: GscService) { }

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    this.receiveMessage(event)
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.gscService.closeGSC().subscribe();
      this.toggle = false;
    }
  }

  receiveMessage(e) {
    if (e.data.openGSC === true) {
      this.toggle = true;
    }
  }
}
