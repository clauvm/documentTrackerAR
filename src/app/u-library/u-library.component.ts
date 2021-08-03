import { Component, Input, OnInit } from '@angular/core';
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
  searchWord: string;
  books: Book[];
  searchResult: any;


  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.getBooks()
        .subscribe(() => {
            this.searchUpdated
                .pipe(
                    debounceTime(300)
                )
                .subscribe((val: string) => {
                    if (val === '') {
                        console.log('entra aca');
                        // this.getContacts().subscribe((contacts) => {});
                        this.getBooks().subscribe((books) => {});
                    } else {
                    //     console.log('segunda opcion');
                        this.searchBooks();
                    }
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
            observer.next();
          });
    });
  }
  searchBooks(): void {
      // return new Observable<any>(observer => {
          console.log('search method');
          console.log(this.searchWord);
          if (this.searchWord) {
              console.log('entro al if');
              // const searchedValue: ;
              const newList = this.books;
              const testy = [];
              const form = document.querySelector('input[name="optradio"]:checked') as HTMLFormElement;
              const wordRequested = this.searchWord.toLowerCase();
              if (form.value === 'title'){
                  console.log('entro a title');
                  console.log(wordRequested);
                  // tslint:disable-next-line:only-arrow-functions
                  newList.map(function(item): void {
                      const test = item.volumeInfo;
                      // tslint:disable-next-line:max-line-length
                      console.log(test.title);
                      if (test.title.toLowerCase().includes(wordRequested)) {
                          testy.push(item);
                          console.log('test' + test.description);
                      }
                  });
              } else if (form.value === 'topic'){
                  // tslint:disable-next-line:only-arrow-functions
                  newList.map(function(item): void {
                      const test = item.volumeInfo;
                      // tslint:disable-next-line:max-line-length
                      if (test.title.toLowerCase().includes(wordRequested.toLowerCase()) || test.description.toLowerCase().includes(wordRequested.toLowerCase())) {
                          testy.push(item);
                          console.log('test' + test.description);
                      }
                  });
              } else {
                  // tslint:disable-next-line:only-arrow-functions
                  newList.map(function(item): void {
                      // let test: string[] = [];
                      // test = item.volumeInfo.categories;
                      // console.log(test);
                      // console.log(test.includes(wordRequested));
                      // tslint:disable-next-line:max-line-length
                      // for (const i = 0; i< test.categories.length; i++){
                      //     if (test.categories[i] === wordRequested) {
                      //         testy.push(item);
                      //         console.log('test' + test.description);
                      //     }
                      // }
                      // if (test.categories.find(wordRequested)) {
                      //     testy.push(item);
                      //     console.log('test' + test.description);
                      // }
                  });
              }
              this.searchResult = testy;
              console.log('new list');
              // console.log(this.searchResult);
              this.books = testy;
              console.log(this.books);
          } else {
              this.getBooks();
          }
  }

}
