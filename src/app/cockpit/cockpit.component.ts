import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  ServerElement = [];
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.ServerElement.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
  onAddBluePrint() {
    this.ServerElement.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

}
