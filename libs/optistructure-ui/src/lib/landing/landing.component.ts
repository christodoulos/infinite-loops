import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'infinite-loops-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptistructureLandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
