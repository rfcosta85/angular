import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  frontEnd = ['HTML e CSS', 'React', 'Angular', 'JavaScript', 'TypeScript'];
  backEnd = ['Certificação Java', 'C#', '.NET para Web', 'PHP', 'PHP para web'];
  devops = ['Windows', 'Linux', 'Google Cloud', 'Azure', 'AWS', 'Segurança'];
  dataScience = [
    'SQL e Banco de Dados',
    'Engenharia de Dados',
    'Data Science',
    'Machine Learning',
  ];
}
