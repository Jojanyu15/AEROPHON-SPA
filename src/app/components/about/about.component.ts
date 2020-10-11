import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  loading: boolean;
  constructor() {}

  ngOnInit(): void {
    this.loading = true;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterContentInit(): void {
    this.loading = false;
  }
}
