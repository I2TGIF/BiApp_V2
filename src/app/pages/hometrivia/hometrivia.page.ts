import { Component, OnInit } from '@angular/core';
import {LogicService} from '../../services/logic.service'; 
import { Storage } from '@ionic/storage';
import {Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-hometrivia',
  templateUrl: './hometrivia.page.html',
  styleUrls: ['./hometrivia.page.scss'],
})
export class HometriviaPage  {
  id: any;
    totalQuizNum: number;
    quizzes: any;
    quizIndex: number;
    quizIndexArray: any;
    option: {
      category: number,
      difficulty: string,
      quizNum: number
    };
  

  constructor(private navCtrl:Router, 
    private quizProvider: LogicService, 
    private route: ActivatedRoute, private storage: Storage

    ) { }
    
    ionViewWillEnter() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.storage.get('option').then((val) => {
        if (val !== null) {
          this.option = JSON.parse(val);
        } else {
          this.option = {
            category: 15,
            difficulty: 'medium',
            quizNum: 10
          };
        };

        this.quizProvider.getQuiz().subscribe(quiz => {
            this.storage.set('quizzes', JSON.stringify(quiz));
          });
      });
      this.storage.get('quizIndex').then((val) => {
        this.quizIndex = val;
      });
  
      this.storage.get('quizzes').then((val) => {
        this.quizzes = JSON.parse(val);
        this.totalQuizNum = this.quizzes.results.length;
      });
    };
  
    shuffle(arr) {
      let currentIndex = arr.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
      return arr;
    }
  
    shuffleQuiz() {
      let fruits: number[] = [];
      for (var i = 0; i < this.totalQuizNum; i++) {
        fruits.push(i)
      }
      this.shuffle(fruits);
      this.quizIndexArray = fruits;
      console.log(this.quizIndex);
  
    }
    start() {
      this.shuffleQuiz();
      this.storage.set('quizIndex', 0);
      this.storage.set('quizIndexArray', this.quizIndexArray)
      this.storage.set('results', []);
      this.navCtrl.navigate(['/game-view']);
  
    };


}
