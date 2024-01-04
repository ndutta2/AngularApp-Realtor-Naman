import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

import { IPropertyBase } from '../../models/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('FormTabs') staticTabs: TabsetComponent;
  
propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

propertyView: IPropertyBase = {
  Id: null,
  Name:'',
  Price: null,
  SellRent: null,
  PType: '',
  FType:null,
  BHK: null,
  BuiltArea: null,
  City: null,
  RTM: null

}


  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack()
  {
    this.router.navigate(['/'])
  }
  onSubmit(Form: NgForm){
    console.log("Congrats the form is submitted.");
    console.log(Form);
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
