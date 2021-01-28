import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'optistructure-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptistructureTopbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
