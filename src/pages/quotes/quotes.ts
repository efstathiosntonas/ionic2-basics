import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Quote} from '../../data/quote.inteface';
import {QuotesService} from '../../services/quotes.service';

@Component({
  selector   : 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService) {
  }


  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title   : 'Add Quote',
      subTitle: 'Are you Sure?',
      message : 'Are you sure you want to add the quote?',
      buttons : [
        {
          text   : 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text   : 'No i changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('no');
          }
        }
      ]
    });
    alert.present();
  }
}
