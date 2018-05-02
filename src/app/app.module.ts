import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { navbarcomponent } from './navbar/navbar.component';
import {ImageService} from './image/shared/image.service';
import {ImageFilterPipe} from './image/shared/filter.pipe';
import {FormsModule} from '@angular/forms';
import { gallery1Component } from './gallery1/gallery1.comoponent';
import {appRoutes} from './routes';
import { RouterModule } from '@angular/router';
import { imagecomponent } from './image/image.comoponent';
import {ActivatedRoute} from '@angular/router';

@NgModule({
  declarations: [ 
    AppComponent,
    navbarcomponent,
    gallery1Component,
    imagecomponent,
    ImageFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
     RouterModule.forRoot(appRoutes),
    
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
