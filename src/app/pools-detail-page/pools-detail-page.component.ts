import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pools-detail-page',
  templateUrl: './pools-detail-page.component.html',
  styleUrls: ['./pools-detail-page.component.css']
})
export class PoolsDetailPageComponent implements OnInit {

  public pooladdress;
  public userdetails;
  public ratings;
  public poolsize;
  public cost;
  constructor() { }

  ngOnInit() {
    this.pooladdress = "7777 Olive, Seatle,dus tempor democritum. Vel te affert blandit. Vis te decore appetere lobortis, eos te nostrum vituperatoribus, nostro reprehendunt mediocritatem ne qui. Dicat facer et per, an nostrud perpetua cotidieque his, qui gloriatur complectitur eu. Duo at veritus cotidieque, stet impetus pertinacia at qui. Ullum minim iracundia ut nam, per id suas graece mnesarchum";
    this.userdetails = "Email : Ninja@ninja.com";
    this.poolsize = "Poolsize : Small";
    this.cost = "Cost $100";
    this.ratings = [
      {
        "name":"Ninja",
        "num":" Rating 5/5",
        "msg":"t, cu vis ludus tempor democritum. Vel te affert blandit. Vis te decore appetere lobortis, eos te nostrum vituperatoribus, nostro reprehendunt mediocritatem ne qui. Dicat facer et per, an nostrud perpetua cotidieque his, qui gloriatur complectitur eu. Duo at veritus cotidieque, stet impetus pertinacia at qui. Ullum minim iracundia ut nam, per id suas graece mnesarchum"
      },
      {
        "name":"Ninja",
        "num":" Rating 5/5",
        "msg":"Lorem ipsum dolor sit amet, duo putant constituam et, cu vis ludus tempor democritum. Vel te affert blandit. Vis te decore appetere lobortis, eos te nostrum vituperatoribus, nostro reprehendunt mediocritatem ne qui. Dicat facer et per, an nostrud perpetua cotidieque his, qui gloriatur complectitur eu. Duo at veritus cotidieque, stet impetus pertinacia at qui. Ullum minim iracundia ut nam, per id suas graece mnesarchum"
      },
      {
        "name":"Ninja",
        "num":" Rating 5/5",
        "msg":"Lorem ipsum dolor sit amet, duo putant constituam et, cu vis ludus tempor democritum. Vel te affert blandit. Vis te decore appetere lobortis, eos te nostrum vituperatoribus, nostro reprehendunt mediocritatem ne qui. Dicat facer et per, an nostrud perpetua cotidieque his, qui gloriatur complectitur eu. Duo at veritus cotidieque, stet impetus pertinacia at qui. Ullum minim iracundia ut nam, per id suas graece mnesarchum"
      }
    ]
  }

}
