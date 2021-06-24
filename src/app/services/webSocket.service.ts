import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import {webSocket, WebSocketSubject} from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  helloMsg = {
    type: 'hello',
    apikey: 'B73EFDB9-FD97-4BD9-97A1-BA8499FA9B5F',
    heartbeat: false,
    subscribe_data_type: ['exrate'],
    // subscribe_filter_asset_id: ['BTC'],
    // subscribe_filter_exchange_id: ['USD'],
    subscribe_filter_symbol_id: [
      'BITSTAMP_SPOT_BTC_USD$',
    ],
    subscribe_update_limit_ms_book_snapshot: 55000,
    subscribe_update_limit_ms_quote: 45000
  };

  constructor() {
  }

  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): void {
    const ws = new WebSocket(url);
    ws.onopen = (socket) => {
      console.log(socket);
      ws.send(JSON.stringify(this.helloMsg));
    };

  }
}
