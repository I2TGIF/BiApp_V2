import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListService } from '../../list.service';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage {
  item: any;
  tabIndex: number;
  itemIndex: number;
  buttons: Array<string>;
  constructor(private router: Router,
              private route: ActivatedRoute,
              public alertController: AlertController,
              private ListService: ListService ) { 
    this.buttons = ["alarm-outline", "cart-outline", "chatbubble-outline", "checkmark-done-outline","shirt-outline", "search-outline", "home-outline"];
    this.tabIndex = +this.route.snapshot.paramMap.get('tab');
    this.itemIndex = +this.route.snapshot.paramMap.get('item'); 
    if (this.itemIndex >= 0) {
      this.item = Object.assign({}, this.ListService.getItem(this.tabIndex, this.itemIndex));
      this.item.date = new Date(this.item.date).toISOString();
    }
    else {
      this.item = { date: new Date().toISOString(), task: '', icon: 'radio-button-off'};
    } 
  }
  async error(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  save() {
    if (!this.item.task.length) {
      this.error('No ha ingresado texto');
    }
    else {
      if (this.itemIndex >= 0) {
        this.ListService.setItem(this.tabIndex, this.item, this.itemIndex);
      }
      else {
        this.ListService.setItem(this.tabIndex, this.item);      
      }
      this.router.navigate(['/diario']);
    }
  }
}
