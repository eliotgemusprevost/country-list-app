import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryRow } from "@interface/country-row";
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CountriesService } from '@service/countries.service';


@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:any;
  COLUMNS = ['name','population','capital', 'region', 'flag'];
  loading:boolean;

  constructor(
    private countriesService:CountriesService
  ) {
    this.loading = true;
   }

   ngOnInit() {
    this.countriesService.getAllCountries().subscribe( (data:CountryRow[]) => {
      this.dataSource = new MatTableDataSource<CountryRow>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  filterData(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    
  }

}
