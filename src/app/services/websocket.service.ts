import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: WebSocket;
  private mensajeSubject: Subject<any> = new Subject<any>();

  constructor(private ngZone: NgZone) { }
  

  connect() {
    this.socket = new WebSocket(`ws://20.55.201.18:8000/ws/admin/reports/`);

    this.socket.onmessage = (event) => {
      this.ngZone.run(() => {
        const data = JSON.parse(event.data);
        this.mensajeSubject.next(data);
      });
    };

    this.socket.onclose = (event) => {
      console.error('Notification socket closed unexpectedly');
    };
  }

  get messages() {
    return this.mensajeSubject.asObservable();
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
