import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieInfo } from '../MovieInfo';

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {

  @Input() movie: MovieInfo;
  thisMovie = "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200/https://www.rspcansw.org.au/wp-content/uploads/2017/08/50_a-feature_dogs-and-puppies_mobile.jpg"

  constructor() { }

  ngOnInit() {
  }

}
