import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  results: any;
    quizTotal: number;
    correctTotal: number;

  constructor(public navCtrl: Router,
    public navParams: ActivatedRoute,
    private storage: Storage) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get('results').then((val) => {
      this.results = val;
      this.quizTotal = this.results.length;
      let filterAnswers = this.results.filter(
        answer => answer.yourAnswer === answer.correctAnswer
      );

      this.correctTotal = filterAnswers.length;
    });
  }

  backHome() {
    this.navCtrl.navigate(['/home']);
  }

  restart() {
    this.navCtrl.navigate(['/game-view']);
    this.storage.set('quizIndex', 0);
    this.storage.set('results', []);
  }
}
