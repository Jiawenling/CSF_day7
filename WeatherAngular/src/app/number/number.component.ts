import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  nums: number = 1

  constructor(private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.nums = this.activatedRouter.snapshot.params['nums']
  }

  back(){
    this.router.navigate(['/'])
  }

}
