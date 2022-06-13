import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro-capitals',
  templateUrl: './euro-capitals.component.html',
  styleUrls: ['./euro-capitals.component.scss'],
})
export class EuroCapitalsComponent implements OnInit {
  title: string;
  capitals: string;
  language: string;
  population: string;

  austria = {
    capital: 'Viena',
    language: 'Alemão',
    population: '1,9 MM',
  };

  portugal = {
    capital: 'Lisboa',
    language: 'Português',
    population: '504.718 M',
  };
  constructor() {}

  monetaryMembersCountries: any = [
    'Austria',
    'Bélgica',
    'Chipre',
    'Estônia',
    'Finlândia',
    'França',
    'Alemanha',
  ];

  monetaryMembersCountries2: any = [
    'Grécia',
    'Irlanda',
    'Itália',
    'Letónia',
    'Lituânia',
    'Luxemburgo',
    'Malta',
  ];

  monetaryMembersCountries3: any = [
    'Países Baixos',
    'Portugal',
    'Eslováquia',
    'Eslovênia',
    'Espanha',
  ];

  memberCountries: any = [
    'Bulgária',
    'Croácia',
    'República Checa',
    'Hungria',
    'Polônia',
    'Romênia',
    'Suécia',
  ];

  ngOnInit(): void {}

  showCountry(): void {
    if (this.title === 'Portugal') {
      this.capitals = this.portugal.capital;
      this.language = this.portugal.language;
      this.population = this.portugal.population;
    } else if (this.title === 'Austria') {
      this.capitals = this.austria.capital;
      this.language = this.austria.language;
      this.population = this.austria.population;
    }
  }
}
