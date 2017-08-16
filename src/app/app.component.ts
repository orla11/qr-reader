import {Component, OnInit} from '@angular/core';

import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Ng2DeviceService]
})
export class AppComponent implements OnInit{
  deviceInfo: string;
  title = 'Test Qr Reader';

  constructor (private deviceService: Ng2DeviceService) {
      this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit() {
  }

}
