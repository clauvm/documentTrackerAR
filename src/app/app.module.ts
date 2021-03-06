import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ULibraryComponent } from './u-library/u-library.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ScanItemsComponent } from './scan-items/scan-items.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import { UBookComponent } from './u-book/u-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ULibraryComponent,
    AddItemsComponent,
    ScanItemsComponent,
    UBookComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatMenuModule,
        HttpClientModule,
        MatGridListModule,
        FormsModule
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
