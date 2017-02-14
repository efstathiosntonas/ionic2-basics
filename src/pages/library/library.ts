import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Quote} from '../../data/quote.inteface';
import quotes from '../../data/quotes';
import {QuotesPage} from '../quotes/quotes';

@Component({
  selector   : 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

  quotesPage = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  quoteCollection: { category: string, quotes: Quote[], icon: string }[];

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
