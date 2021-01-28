import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'optistructure-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptistructureSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
