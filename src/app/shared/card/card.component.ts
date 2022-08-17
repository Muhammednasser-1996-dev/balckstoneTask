import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: any;

  @Output() isLikedMovie: EventEmitter<object> = new EventEmitter();

  moviesUpdatedData: any[] = [];

  constructor() {
    console.log(this.data);
  }

  ngOnInit(): void {}

  toggleLike(currentIndex: number) {
    let moivesArr = localStorage.getItem('updatedData');
    if (moivesArr) {
      this.moviesUpdatedData = JSON.parse(moivesArr) ;
    }
    this.data[currentIndex].isLiked = !this.data[currentIndex].isLiked;
    if (this.data[currentIndex].isLiked) {
      this.moviesUpdatedData.push(this.data[currentIndex]);
    }else{
      this.moviesUpdatedData = this.moviesUpdatedData.filter((item: any) => item.id !== this.data[currentIndex].id);
    }
    this.isLikedMovie.emit(this.moviesUpdatedData);
  }
}
