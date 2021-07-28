import {Injectable} from '@angular/core';
import {Book} from './interfaces/book';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class LibraryService {
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    private baseUrl = 'http://192.168.0.8:3000/';
    private contactUrl = 'contact/';  // URL to web api
    private constructUrl = (url) => this.baseUrl + url;
    constructor(private http: HttpClient) {
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getBookList(): Observable<Book[]> {
        const url = 'https://www.googleapis.com/books/v1/users/112564758834825542426/bookshelves/1001/volumes?maxResults=40&key=AIzaSyCtZ1rAMgFCN5nes0tZCi5rCNJpwOGF9N0';
        return new Observable<Book[]>(subscriber => {
            this.http.get<any>(url)
                .pipe(
                    catchError(this.handleError<any>('getHeroes', {message: 'error', data: []}))
                )
                .subscribe((response) => {
                    console.log('este es el servicio');
                    console.log(response.items[0].volumeInfo.title);
                    const books: Book[] = response.items;
                    subscriber.next(books);
                }, (error) => {
                    subscriber.error(error);
                }, () => {
                    subscriber.complete();
                });
        });
    }

}
