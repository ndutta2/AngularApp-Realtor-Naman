
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';

import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../../models/ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  properties: IPropertyBase[];

  constructor(private route: ActivatedRoute,private housingService: HousingService){}
  
    ngOnInit():void{
     if (this.route.snapshot.url.toString()){
        this.SellRent=2;
      }
      this.housingService.getAllProperties(this.SellRent).subscribe(
        data=>{
        this.properties=data;
        console.log(data);
        },error=> {
          console.log(error);
        }
      )
  }

}
