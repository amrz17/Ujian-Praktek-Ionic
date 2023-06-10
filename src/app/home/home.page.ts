import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private socialSharing : SocialSharing
  ) {}

  WaSocialSharing() {
    this.socialSharing.shareViaWhatsApp('Nama = Muhammad Amer', 'https://ionicframework.com/docs/v3/img/meta/ionic-framework-og.png', 'https://cebooks.my.id')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  WaSocialSharingToPhone() {
    this.socialSharing.shareViaWhatsAppToPhone('+6282125713509','Apa barang ini ready?', 'https://cebooks.my.id')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  // WaSocialSharingToReciever() {
  //   this.socialSharing.shareViaWhatsAppToReceiver('+6228125713509','Test Whatsapp To Phone Sharing', 'https://cebooks.my.id')
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }

  
  EmailSocialSharing() {
    this.socialSharing.shareViaEmail('Nama : Muhammad Amer', 'sharing', ['muhammad.amer45@gmail.com'])
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  TelegramSocialSharing() {
    this.socialSharing.canShareVia('https://t.me/Katoww_Bot?start=${output}')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }
}
