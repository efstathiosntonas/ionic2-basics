import { Component } from '@angular/core';
import { Toggle} from 'ionic-angular';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle){
   this.settingsService.setBackground(toggle.checked)
  }

  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
