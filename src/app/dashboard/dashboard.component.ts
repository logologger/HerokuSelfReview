import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public  searchResults = [
    {"address":"8888 Pike , SeattleWA 98102",
    "poolsize":"large",
    "costpernight":"$200",
    "details":"4.5/- See more"},
    {"address":"8888 Pike , SeattleWA 98102",
    "poolsize":"large",
    "costpernight":"$200",
    "details":"4.5/- See more"},
    {"address":"8888 Pike , SeattleWA 98102",
    "poolsize":"large",
    "costpernight":"$200",
    "details":"4.5/- See more"},
    {"address":"8888 Pike , SeattleWA 98102",
    "poolsize":"large",
    "costpernight":"$200",
    "details":"4.5/- See more"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
