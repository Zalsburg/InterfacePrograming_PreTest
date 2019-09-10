import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieInfo } from '../movie-info-component/MovieInfo';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  @Input() movie: MovieInfo;

  constructor() { }

  ngOnInit() {
  }

}
