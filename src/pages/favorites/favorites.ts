import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from '../../data/quote.inteface';
import {QuotesService} from '../../services/quotes.service';
import {QuotePage} from '../quote/quote';

@Component({
  selector   : 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesService: QuotesService, private modalCtrl: ModalController) {
  }

  quotes: Quote[];

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }

}
