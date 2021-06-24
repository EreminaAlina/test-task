import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {
  }
  sendHello() {
    return this.socket.emit('message', {
      type: 'hello',
      apikey: 'B73EFDB9-FD97-4BD9-97A1-BA8499FA9B5F',
      heartbeat: false,
      subscribe_data_type: ['trade']
    });
  }
  getMessage() {
    return this.socket.fromEvent('message');
  }
  close() {
    this.socket.disconnect();
  }

  on(eventName, cb) {
    return this.socket.on(eventName, cb);
  }
}
