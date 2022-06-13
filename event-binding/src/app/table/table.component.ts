import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  isVisibleNorthAmerica: boolean = false;
  isVisibleCentralAmerica: boolean = false;
  isVisibleSouthAmerica: boolean = false;
  isVisibleEurope: boolean = false;
  isVisibleAfrica: boolean = false;
  isVisibleAsia: boolean = false;
  isVisibleOceania: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  northAmericaData = [
    'Países: 3',
    'População: 570,2 milhões',
    'PIB: US$ 23,8 trilhões',
  ];

  centralAmericaData = [
    'Países: 7',
    'População: 75,3 milhões',
    'PIB: US$ 582,4 milhões',
  ];

  southAmericaData = [
    'Países: 20',
    'População: 405,5 milhões',
    'PIB: US$ 6,9 trilhões',
  ];

  europeData = [
    'Países: 50',
    'População: 741.4 milhões',
    'PIB: US$ 34,6 trilhões',
  ];

  africaData = [
    'Países: 54',
    'População: 1,2 bilhões',
    'PIB: US$ 1,4 trilhões',
  ];

  asiaData = ['Países: 47', 'População: 4,5 bilhões', 'PIB: US$ 3.7 trilhões'];

  oceaniaData = [
    'Países: 13',
    'População: 37,1 milhões',
    'PIB: US$ 1,5 trilhões',
  ];

  getNorthAmerica() {
    this.isVisibleNorthAmerica = true;
    this.isVisibleCentralAmerica = false;
    this.isVisibleSouthAmerica = false;
    this.isVisibleEurope = false;
    this.isVisibleAfrica = false;
    this.isVisibleAsia = false;
    this.isVisibleOceania = false;
  }

  getCentralAmerica() {
    this.isVisibleNorthAmerica = false;
    this.isVisibleCentralAmerica = true;
    this.isVisibleSouthAmerica = false;
    this.isVisibleEurope = false;
    this.isVisibleAfrica = false;
    this.isVisibleAsia = false;
    this.isVisibleOceania = false;
  }

  getSouthAmerica() {
    this.isVisibleNorthAmerica = false;
    this.isVisibleCentralAmerica = false;
    this.isVisibleSouthAmerica = true;
    this.isVisibleEurope = false;
    this.isVisibleAfrica = false;
    this.isVisibleAsia = false;
    this.isVisibleOceania = false;
  }

  getEurope() {
    this.isVisibleNorthAmerica = false;
    this.isVisibleCentralAmerica = false;
    this.isVisibleSouthAmerica = false;
    this.isVisibleEurope = true;
    this.isVisibleAfrica = false;
    this.isVisibleAsia = false;
    this.isVisibleOceania = false;
  }

  getAfrica() {
    this.isVisibleNorthAmerica = false;
    this.isVisibleCentralAmerica = false;
    this.isVisibleSouthAmerica = false;
    this.isVisibleEurope = false;
    this.isVisibleAfrica = true;
    this.isVisibleAsia = false;
    this.isVisibleOceania = false;
  }

  getAsia() {
    this.isVisibleNorthAmerica = false;
    this.isVisibleCentralAmerica = false;
    this.isVisibleSouthAmerica = false;
    this.isVisibleEurope = false;
    this.isVisibleAfrica = false;
    this.isVisibleAsia = true;
    this.isVisibleOceania = false;
  }

  getOceania() {
    this.isVisibleNorthAmerica = false;
    this.isVisibleCentralAmerica = false;
    this.isVisibleSouthAmerica = false;
    this.isVisibleEurope = false;
    this.isVisibleAfrica = false;
    this.isVisibleAsia = false;
    this.isVisibleOceania = true;
  }
}
