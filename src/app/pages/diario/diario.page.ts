import { Component, OnInit,ViewChild } from '@angular/core';
import { IonTabBar, IonList, AlertController } from '@ionic/angular';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage {
  @ViewChild('myTabs', {static: false}) tabRef: IonTabBar;
  @ViewChild('myList', {static: false}) listRef: IonList;
  tabs: any;
  tabIndex: number;
  reorder: boolean;

  constructor(private listService: ListService,
              private alertController: AlertController){
    this.tabs = [
      {label: 'Pendientes', icon: 'newspaper', list: []},
      {label: 'NOTAS', icon: 'document', list: []}
    ];
    this.tabs.forEach((tab, index) => {
      tab.list = this.listService.getList(index);
    });
    this.tabIndex = 0;
    this.reorder = false;
  }

  toggleReorder() {
    this.reorder = !this.reorder;
    this.listRef.closeSlidingItems();
  }

  setTab(tabIndex) {
    this.tabIndex = tabIndex;
    this.tabRef.selectedTab = this.tabs[this.tabIndex].label;
  } 

  async deleteItem(item?) {
    const alert = await this.alertController.create({
      header: item === undefined ? 'Borrar todos' : 'Borrar item',
      message: '¿Estás seguro?',
      buttons: [
        {
          text: 'SI',
          handler: () => {
            this.listRef.closeSlidingItems();
            if (item === undefined) {
              this.listService.deleteList(this.tabIndex);
            }
            else {
              this.listService.deleteItem(this.tabIndex, item);              
            }
          }
        },       
        {
          text: 'CANCELAR',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  moveItem(indexes) {
    this.listService.moveItem(this.tabIndex, indexes.from, indexes.to);
    indexes.complete();
  }
}
