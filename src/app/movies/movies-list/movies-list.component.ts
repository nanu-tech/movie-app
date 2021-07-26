import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
movies: Movie[] = [
  new Movie('Pocahontas', 'This is an animation', 'c:/angular-apps/movie-app/images/poca.png'),
  new Movie('Pocahontas', 'This is an animation', 'c:/angular-apps/movie-app/images/poca.png'),
  new Movie('Pocahontas', 'This is an animation', 'c:/angular-apps/movie-app/images/poca.png')
];

  constructor() { }

  ngOnInit(): void {
  }

}
