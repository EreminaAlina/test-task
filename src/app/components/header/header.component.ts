import { Component, OnInit } from '@angular/core';
import { The1 } from '../../interfaces/the1';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedValue = null;
  listMap: Record<number, The1> | undefined = [];

  constructor() {
  }

  ngOnInit(): void {
    // this.service.getMap().pipe(catchError((err) => {
    //   console.log(err);
    //   return of({});
    // })).subscribe((resp) => {
    //   if ('data' in resp) {
    //     this.listMap = resp.data;
    //   }
    //   console.log(1111, this.listMap[0]);
    //   this.selectedValue = this.listMap[0].symbol;
    // });
  }
}
