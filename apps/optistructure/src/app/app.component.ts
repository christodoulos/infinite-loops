import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'infinite-loops-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'optistructure';

  ngOnInit(): void {
    localStorage.removeItem('AkitaStores');
    localStorage.removeItem('user');
  }
}
