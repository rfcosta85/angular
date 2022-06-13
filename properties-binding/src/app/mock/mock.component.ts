import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss'],
})
export class MockComponent implements OnInit {
  @Input() monetaryCountries: any;
  @Input() monetaryCountries2: any;
  @Input() monetaryCountries3: any;
  @Input() memberCountries: any;

  constructor() {}

  ngOnInit(): void {}
}
