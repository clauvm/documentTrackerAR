import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ULibraryComponent} from './u-library/u-library.component';
import {AddItemsComponent} from './add-items/add-items.component';
import {ScanItemsComponent} from './scan-items/scan-items.component';
import {ComponentFixture} from '@angular/core/testing';

// describe('HomePageComponent', () => {
//   let component: HomePageComponent
//   let fixture: ComponentFixture<<HomePageComponent>>;
// })


const routes: Routes = [
  {path: 'homePage', component: HomePageComponent},
  {path: 'library', component: ULibraryComponent},
  {path: 'newDocument', component: AddItemsComponent},
  {path: 'scanBooks', component: ScanItemsComponent},
  {path: '', redirectTo: '/homePage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
