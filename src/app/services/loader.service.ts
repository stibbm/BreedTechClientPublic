import { Injectable } from '@angular/core';
import { LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    public loadingController: LoadingController
  ) { }

  async closeLoader() {
    await this.checkAndCloseLoader();
    setTimeout(() => this.checkAndCloseLoader(), 5000);
  }

  async checkAndCloseLoader() {
    const loader = await this.loadingController.getTop();
    if (loader !== undefined) {
      await this.loadingController.dismiss();
    }
  }

  async simpleLoader() {
    await this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();
    });
  }

  dismissLoader() {
    this.loadingController.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occurred: ', err);
    });
  }

  async autoLoader() {
    await this.loadingController.create({
      message: 'Loading...',
      duration: 4000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response2) => {
        console.log('Loader dismissed');
      });
    });
  }

  customLoader() {
    this.loadingController.create({
      message: 'Loader with customer style',
      duration: 4000,
      cssClass: 'loader-css-class',
      backdropDismiss: true
    }).then((res) => {
      res.present();
    });
  }
}
