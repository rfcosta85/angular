import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.scss'],
})
export class CapitalsComponent implements OnInit {
  title: string;
  capitals: string;
  language: string;
  population: string;

  membersCountries = ['Brasil', 'Argentina', 'Paraguai', 'Uruguai'];

  affiliateCountries = ['Peru', 'Equador', 'Colômbia', 'Bolívia', 'Chile'];

  brasil = {
    capital: 'Brasília',
    language: 'Português',
    population: '3.09 MM',
  };

  argentina = {
    capital: 'Buenos Aires',
    language: 'Espanhol',
    population: '2,90 MM',
  };

  paraguai = {
    capital: 'Assunção',
    language: 'Espanhol',
    population: '525,2 M',
  };

  uruguai = {
    capital: 'Montevideo',
    language: 'Espanhol',
    population: '1,38 MM',
  };

  peru = {
    capital: 'Lima',
    language: 'Espanhol',
    population: '8,0 MM',
  };

  equador = {
    capital: 'Quito',
    language: 'Espanhol',
    population: '2,0 MM',
  };

  colombia = {
    capital: 'Bogotá',
    language: 'Espanhol',
    population: '7,18 MM',
  };

  bolivia = {
    capital: 'La Paz',
    language: 'Espanhol',
    population: '766,4 M',
  };

  chile = {
    capital: 'Santiago',
    language: 'Espanhol',
    population: '6,26 MM',
  };

  constructor() {}

  ngOnInit(): void {}

  getText() {
    if (this.title === 'Brasil') {
      this.capitals = this.brasil.capital;
      this.language = this.brasil.language;
      this.population = this.brasil.population;
    } else if (this.title === 'Argentina') {
      this.capitals = this.argentina.capital;
      this.language = this.argentina.language;
      this.population = this.argentina.population;
    } else if (this.title === 'Paraguai') {
      this.capitals = this.paraguai.capital;
      this.language = this.paraguai.language;
      this.population = this.paraguai.population;
    } else if (this.title === 'Uruguai') {
      this.capitals = this.uruguai.capital;
      this.language = this.uruguai.language;
      this.population = this.uruguai.population;
    } else if (this.title === 'Peru') {
      this.capitals = this.peru.capital;
      this.language = this.peru.language;
      this.population = this.peru.population;
    } else if (this.title === 'Equador') {
      this.capitals = this.equador.capital;
      this.language = this.equador.language;
      this.population = this.equador.population;
    } else if (this.title === 'Colômbia') {
      this.capitals = this.colombia.capital;
      this.language = this.colombia.language;
      this.population = this.colombia.population;
    } else if (this.title === 'Bolívia') {
      this.capitals = this.bolivia.capital;
      this.language = this.bolivia.language;
      this.population = this.bolivia.population;
    } else if (this.title === 'Chile') {
      this.capitals = this.chile.capital;
      this.language = this.chile.language;
      this.population = this.chile.population;
    }
  }
}
