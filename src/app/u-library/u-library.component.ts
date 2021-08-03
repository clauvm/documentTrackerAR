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
            observer.next();
          });
    });
  }
  searchBooks(): void {
      console.log('search method');
      console.log(this.books);
      const newList = this.books;
      const testy = [];
      const a = document.getElementById('trying');
      const form = a.querySelector('input[name="optradio"]:checked') as HTMLFormElement;
      const log = document.querySelector('#log');
      console.log(form);
      console.log(form.value);
      // tslint:disable-next-line:only-arrow-functions
      newList.map(function(item): void{
          const test = item.volumeInfo;
          console.log(test.title.toLowerCase().includes('Day'.toLowerCase()));
          // console.log(testy);
          if (test.title.toLowerCase().includes('book'.toLowerCase()) || test.description.toLowerCase().includes('book'.toLowerCase())){
              testy.push(item);
              console.log('test' + test.description);
          }
      });
      this.searchResult = testy;
      console.log('new list');
      console.log(this.searchResult);
  }

}
