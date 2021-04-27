import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }




  ngOnInit(): void {
    // this.trigger.openMenu();
  }

  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

}
