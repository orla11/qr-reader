import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild
} from '@angular/core';

declare var qrcode: any;

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.css']
})
export class QrReaderComponent implements OnInit {
  reader: any;
  result: any;
  confirmed: boolean = false;
  error: boolean = false;
  @ViewChild('qrReaderEl') node: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  openQrCamera() {
      this.reader = new FileReader();
      this.reader.onload = (() => {
          this.renderer.setValue(this.node.nativeElement, '');
          qrcode.callback = ((res) => {
              if (res instanceof Error) {
                  this.error = true;
                  this.result = 'No QR code found. Please make sure the QR code is within the camera\'s frame and try again.';
              } else {
                  this.result = res;
                  this.error = false;
              }
          });
          qrcode.decode(this.reader.result);
      });
      this.reader.readAsDataURL(this.node.nativeElement.files[0]);
  }

  showQrIntro() {
      if (!this.confirmed) {
          this.confirmed = true;
          return confirm('Use your camera to take a picture of the QR code, make sure to take a clear photo.');
      }
  }

}
