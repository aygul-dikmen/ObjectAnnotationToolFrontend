import { Component, OnInit } from '@angular/core';
import { Label } from 'src/app/models/label';
import { HttpClient } from '@angular/common/http';
import { LabelResponseModel } from 'src/app/models/labelResponseModel';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  //labels : Label[] = [];
  // apiUrl = "https://localhost:21745/api/labels"
  // labelResponseModel:LabelResponseModel = {
  //   data: this.labels,
  //   success: false,
  //   message: ''
  // };
  //constructor(private httpClient:HttpClient) { }
  constructor() { }
  
  ngOnInit(): void {
  }
  // getLabels(){

  //   this.httpClient.get<LabelResponseModel>(this.apiUrl)
  //   .subscribe((respose => {}));
  // }

}
