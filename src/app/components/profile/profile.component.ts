import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editableText = "62";
  tableContent = [
    {
      name: "Nagendra Palla",
      position: "Application Developer",
      office: "JP MORGAN CHASE",
      age: "25",
      start_date: "25-09-2017",
      salary: "$452,500"
    },{
      name: "Vijaya Kadiyala",
      position: "Manager",
      office: "JP MORGAN CHASE",
      age: "35",
      start_date: "25-09-2017",
      salary: "$112,000"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  saveEditable($event, row){
    console.log(row);
  }

}
