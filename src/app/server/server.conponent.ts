

import { Component, OnInit } from '@angular/core';


@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`
    
    .online{
        color:white;
    }
    `],
})
export class ServerComponent implements OnInit {
    portNo: number = 4300;
    status: string = 'Offline';
    allowBtn = false;
    serverName = '';
    serverCreate = false;
    servers = ["server1,server2"];
    serverCreation = "Server is not Created Yet";

    onCreateServer() {
        this.serverCreate = true;
        this.servers.push(this.serverName);
        this.serverCreation = "Server Has Been Created " + this.serverName;
    }
    onUpdateServerName(event: Event) {
        // console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    constructor() {
        this.status = Math.random() > 0.5 ? "Online" : "Offline";
    }

    getColor() {
        return this.status === "Online" ? "green" : "red";
    }

    ngOnInit() {

    }

} 