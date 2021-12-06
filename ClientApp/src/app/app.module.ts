import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { InjusticeComponente } from './injustice/injustice.component';
import { FlashComponent } from './flash/flash.component';
import { SearchComponent } from './search/search.component';
import { BatmanComponent } from './batman/batman.component';
import { BComponent } from './b/b.component';
import { LeitorComponent } from './leitor/leitor.component';
import { SinopseComponent } from './sinopse/sinopse.component';
import { SinopseService } from './servico/sinopse.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    InjusticeComponente,
    FlashComponent,
    SearchComponent,
    BatmanComponent,
    SearchComponent,
    LeitorComponent,
    SinopseComponent,
    BComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'injustice', component: InjusticeComponente },
      //{ path: 'flash', component: FlashComponent },
      //{ path: 'batman', component: BatmanComponent },
      { path: ':name', component: SinopseComponent },
      { path: 'leitor/:name/:cap/:pag', component: LeitorComponent },
/*    { path: 'b/:type/:cap', component: BComponent }*/
    ])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
