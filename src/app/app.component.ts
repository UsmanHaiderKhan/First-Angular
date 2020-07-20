import { Component } from '@angular/core';

@Component({
  // selector:'[app-root]' it become an attribute
  // selector:'.app-rot' it become a Class
  selector: 'app-root',
  templateUrl: './app.component.html', //Here we can directly provid the selectors
  styleUrls: ['./app.component.css']    //Here we can provid the link of more then one style sheet links
})
export class AppComponent {
  title = 'First-Angular';
}
