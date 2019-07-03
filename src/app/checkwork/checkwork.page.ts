import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkwork',
  templateUrl: './checkwork.page.html',
  styleUrls: ['./checkwork.page.scss'],
})
export class CheckworkPage implements OnInit {

  constructor(public alertController: AlertController, public router: Router, public zone: NgZone) { }

  ngOnInit() {
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are You Working?',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.zone.run(async () =>
              await this.router.navigate(['scheduleinfo']));
          },
        }
        , {
          text: 'Yes',
          handler: () => {
            this.zone.run(async () =>
            await this.router.navigate(['mapview']));
        },  
          }
      ]
    });

    await alert.present();
  }
}
