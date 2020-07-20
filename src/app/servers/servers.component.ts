import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  showSeceret = false;
  log = [];

  displayNumbers() {
    this.showSeceret = !this.showSeceret;
    this.log.push(new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
