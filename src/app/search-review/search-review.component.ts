import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-review',
  templateUrl: './search-review.component.html',
  styleUrls: ['./search-review.component.css']
})
export class SearchReviewComponent implements OnInit {
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
