import { Component, OnInit } from '@angular/core';
import {Book} from '../interfaces/book';
import {LibraryService} from '../library.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-u-library',
  templateUrl: './u-library.component.html',
  styleUrls: ['./u-library.component.scss']
})
export class ULibraryComponent implements OnInit {

    private searchUpdated: Subject<any> = new Subject();

  books: Book[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.getBooks()
        .subscribe(() => {
            this.searchUpdated
                .pipe(
                    debounceTime(300)
                )
                .subscribe((val: string) => {
                    // if (val === '') {
                        console.log('entra aca');
                        // this.getContacts().subscribe((contacts) => {});
                        this.getBooks().subscribe((books) => {});
                    // } else {
                    //     console.log('segunda opcion');
                    //     this.getContactsByKeyword(val).subscribe((contacts) => {});
                    // }
                });
        });
  }

  getBooks(): Observable<any>{
    console.log('puro milagro');
    return new Observable<any>(observer => {
      this.libraryService
          .getBookList()
          .subscribe((books: Book[]) => {
            this.books = books;
            console.log('component');
            console.log(books);
            // console.log(Book[]);
            observer.next();
          });
    });
  }

}
