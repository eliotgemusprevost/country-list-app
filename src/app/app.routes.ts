import { RouterModule, Routes } from '@angular/router';
import { CountrylistComponent } from './countrylist/countrylist.component';


const APP_ROUTES: Routes = [
  { path: '', component: CountrylistComponent },
  { path: '**', component: CountrylistComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
