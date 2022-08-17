import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: any[];

  @Output() isLikedMovie: EventEmitter<object> = new EventEmitter();

  moviesUpdatedData: IMovie[] = [];

  constructor() {
    console.log(this.data);
  }

  ngOnInit(): void { }

  toggleLike(currentIndex: number) {
    let chachedMovies = localStorage.getItem('updatedData');
    if (chachedMovies) {
      this.moviesUpdatedData = JSON.parse(chachedMovies);
    }
    this.data[currentIndex].isLiked = !this.data[currentIndex].isLiked;
    if (this.data[currentIndex].isLiked) {
      this.moviesUpdatedData.push(this.data[currentIndex]);
    } else {
      this.moviesUpdatedData = this.moviesUpdatedData.filter((item: IMovie) => item.id !== this.data[currentIndex].id);
    }
    this.isLikedMovie.emit(this.moviesUpdatedData);
  }
}
