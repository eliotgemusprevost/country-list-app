import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { APP_ROUTING } from './app.routes';
import { CountrylistComponent } from './countrylist/countrylist.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent
  ],
  imports: [
    BrowserAnimationsModule,
    APP_ROUTING,
    HttpClientModule,
    MaterialModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
