import { Component, OnInit } from '@angular/core';
import { fetchData } from './page-tree/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public treeMap: any = []; //TODO : define interface

  constructor() {
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    console.log(await fetchData())
    this.treeMap = await fetchData();
  }
}
