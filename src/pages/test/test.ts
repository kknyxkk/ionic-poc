import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public beer: any = {};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: Http) {

               let url = this.navParams.get('api_url');
               let beer_id = this.navParams.get('beer_id');

               alert(url + beer_id);

              this.http.get (url + '/beers/' + beer_id)
                  .map(res => res.json())
                  .subscribe(data => {
                      this.beer = data;
                  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  showAlert () {
    let alert = this.alertCtrl.create({
      title: 'Mensagem!',
      subTitle: 'Login efetuado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }
}
