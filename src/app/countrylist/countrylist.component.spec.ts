import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CountrylistComponent } from './countrylist.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CountrylistComponent', () => {
  let component: CountrylistComponent;
  let fixture: ComponentFixture<CountrylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrylistComponent ],
      imports: [ MatToolbarModule,
         MaterialModule, 
         HttpClientModule, 
         BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
