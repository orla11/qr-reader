import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { AppComponent } from './app.component';
import { QrReaderComponent } from './qr-reader/qr-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    QrReaderComponent
  ],
  imports: [
    BrowserModule,
    Ng2DeviceDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
