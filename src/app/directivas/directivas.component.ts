import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  studentList: any[] = [
    {name: 'Santi Pinat', state: 'Aproved'},
    {name: 'Santi Asfefssfs', state: 'Aproved'},
    {name: 'SanASDasfjti Pinat', state: 'Rejected'},
    {name: 'Sasqwrqanti aSDAsasa', state: 'Rejected'},
    {name: 'Santi Pin1231231at', state: 'Aproved'},
    {name: 'El Peor', state: 'Expelled'},
  ];

  show = true;
  btnTitle = '';

  toggle():void {
    this.show = !this.show
    if(this.show == true){
      this.btnTitle = 'Hide Table';
    } else{
      this.btnTitle = 'Show Table';
    };
    }
  constructor() { }

  ngOnInit(): void {
  }

}
