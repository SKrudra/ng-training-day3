import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


interface Student {
  id: number;
  name: string;
}


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {


  @Input() name;
  @Output() passToParent = new EventEmitter<string>();

  show = true;

  facult = 'Sandeep';
  college: string;
  count = 10;
  next: number;
  vanue: any;
  startsOn: Date;
  institude;

  students: Student[] = [];


  trainings = ['Angular', 'Java'];

  constructor() { }

  ngOnInit(): void {
    this.next = 3;
    this.count = 15;
    this.facult = 'Nitin';
    this.vanue = 'Pune';
    this.institude = 'BI-Dev';

    this.trainings.push('SQL');

    let pankaj = {
      name: 'Pankaj',
      id: 101
    };

    let abhijit = {
      name: 'Abhijit',
      id: 102
    };

    let nitin = {
      name: 'Nitin',
      id: 103
    };

    this.students.push(abhijit);
    this.students.push(pankaj);
    this.students.push(nitin);
  }

  buttonClicked() {
    this.passToParent.emit('I am coming from child component');
  }

}
