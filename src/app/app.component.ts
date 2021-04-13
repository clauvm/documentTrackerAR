import {Component, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'webxr';
    markerVisible = {m0: false, m1: false};

    ngOnInit(): void {
        console.log('App component');
    }


}
