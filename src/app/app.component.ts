import {Component, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'My Library App';
    markerVisible = {m0: false, m1: false};
    // hamburger;


    //

    mobileMenu(): void {
        console.log("entra a funcion");
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        console.log(hamburger);
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    closeMenu(): void {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        console.log(hamburger);
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    ngOnInit(): void {
        console.log('App component');

        const hamburger = document.querySelector('.hamburger');
        console.log(hamburger);
        const navLink = document.querySelectorAll('.nav-link');
        hamburger.addEventListener('click', this.mobileMenu);
        navLink.forEach(n => n.addEventListener('click', this.closeMenu));
    }


}
