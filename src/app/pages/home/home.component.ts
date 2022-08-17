import { Component, OnInit } from '@angular/core';
import { finalize, map, Observable } from 'rxjs';
import { HttpGetAllDataService } from 'src/app/services/http-get-all-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _HttpGetAllDataService: HttpGetAllDataService) {
    this.getAllData();
  }

  data: any[];
  btnLabels: any[];
  selectedIndex: number;
  loader: boolean = false;

  ngOnInit(): void {
    this.btnLabels = ['All', 'series', 'movies'];
    this.selectedIndex = 0;
  }

  isLikedHandler(movies: any) {
    localStorage.setItem('updatedData', JSON.stringify(movies));
  }

  getAllData() {
    this.loader = true;
    this._HttpGetAllDataService
      .get()
      .pipe(
        finalize(() => {
          this.loader = false;
        })
      )
      .subscribe((data) => {
        this.checkIsLiked(data.results);
        localStorage.setItem('data', JSON.stringify(this.data));
      });
  }

  checkIsLiked(moviesData: any) {
    this.data = [];
    moviesData.forEach((movie: any) => {
      let updatedData = localStorage.getItem('updatedData');
      if (updatedData) {
        const foundMovie = JSON.parse(updatedData).find(
          (item: any) => item.id === movie._id
        );
        if (foundMovie) {
          movie.isLiked = true;
        } else {
          movie.isLiked = false;
        }
        this.data.push({
          name: movie.title,
          thumbnail: movie.image,
          id: movie._id,
          isLiked: movie.isLiked,
        });
      } else {
        this.data.push({
          name: movie.title,
          thumbnail: movie.image,
          id: movie._id,
          isLiked: movie.isLiked,
        });
      }
    });
  }

  getCategory(index: number, category: string) {
    this.loader = true;
    this.selectedIndex = index;
    if (category !== 'All') {
      this._HttpGetAllDataService
        .getCategory(category)
        .pipe(
          finalize(() => {
            this.loader = false;
          })
        )
        .subscribe((data) => {
          this.checkIsLiked(data.results);
        });
    } else {
      this.getAllData();
    }
  }
}
