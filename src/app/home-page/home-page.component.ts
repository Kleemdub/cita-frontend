import { Component, OnInit } from '@angular/core';
declare const $: any; // declare jquery type

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // jQuery works
    // $(document).ready(function(){
    // });
    
  }

}
