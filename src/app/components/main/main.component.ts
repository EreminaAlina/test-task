import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataItem } from '../../interfaces/table_interface';
import { listOfColumn } from './tableConfig';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../../services/webSocket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  tableConfig = listOfColumn;
  listOfItem: DataItem[];
  socketSub: Subscription = new Subscription();

  constructor(
    private service: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.service.connect('ws://ws-sandbox.coinapi.io/v1/');
  }

  ngOnDestroy(): void {
    this.socketSub?.unsubscribe();
  }

}
