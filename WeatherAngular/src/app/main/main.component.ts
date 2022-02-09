import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  numberArray: number[] = []

  constructor() {
    for(let i = 1; i<11; i++){
      this.numberArray.push(i)
    }
  }

  ngOnInit(): void {
  }

}
