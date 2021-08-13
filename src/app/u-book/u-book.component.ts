import { Component, OnInit } from '@angular/core';
import {Book} from '../interfaces/book';
import {LibraryService} from '../library.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-u-book',
  templateUrl: './u-book.component.html',
  styleUrls: ['./u-book.component.scss']
})
export class UBookComponent implements OnInit {
  // book: Book = {
  //     id: '';
  //     etang: '';
  //     volumeInfo: {
  //         authors: [],
  //         categories: [],
  //         description: 'string',
  //         title: 'string',
  //         subtitle: 'string',
  //         imageLinks: {
  //             thumbnail: 'string'
  //         }
  //     };
  //     detail: 'string';
  // };
    book: Book;
  sub: Subscription;

  constructor(private libraryService: LibraryService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route
        .data
        .subscribe(v => {
          console.log('route');
          console.log(this.route);
          console.log('sub');
          console.log(this.sub);
          this.getBook();
        });
  }

  getBook(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.libraryService.getBook(id)
        .subscribe(book => {
            this.book = book;
            console.log('BOOK!!!');
            console.log(this.book);
            this.book.volumeInfo.description = this.book.volumeInfo.description.replace(/<br>/g, ' ');
            this.book.volumeInfo.description = this.book.volumeInfo.description.replace(/<\/br>/g, ' ');
            this.book.volumeInfo.description = this.book.volumeInfo.description.replace(/<i>/g, ' ');
            this.book.volumeInfo.description = this.book.volumeInfo.description.replace(/<\/i>/g, ' ');
            this.book.volumeInfo.description = this.book.volumeInfo.description.replace(/<b>/g, ' ').replace(/<\/b>/g, ' ');
        });
  }

  findBook(): void{
      console.log('enters here');
      this.router.navigate(['/scanBooks']);
  }

}
