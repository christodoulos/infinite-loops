import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'infinite-loops-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
