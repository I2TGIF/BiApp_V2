import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {BehaviorSubject} from 'rxjs'



@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.page.html',
  styleUrls: ['./game-view.page.scss'],
})
export class GameViewPage implements OnInit {
  time:BehaviorSubject<string> = new BehaviorSubject('00:00');
  timer: number;
  interval;
  startduration:number = 5;
  state: 'start' |'stop' = 'stop';
  quizzes: any;
  currentQuiz: any;
  answers: any;
  correct: any;
  explain: any;
  quizIndex: number;
  quizIndexPercent: number;
  quizArray: number;
  quizArrayIndex: number;
  totalQuizNum: number;
  url_image:any;
  date = new Date('2019-01-26T00:00:00');
  constructor(private navCtrl: Router,
    private storage: Storage) { }

  ngOnInit() {
  }

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

ionViewWillEnter() {
    this.storage.get('quizIndex').then((val) => {
        this.quizIndex = val;
        this.quizIndexPercent = this.quizIndex / 26;
    });
    this.storage.get('quizIndexArray').then((arry) => {
        this.quizArray = arry[this.quizIndex];
        //console.log("Valor dentro del array " + this.quizArray);
    });


    this.storage.get('quizzes').then((val) => {
        this.quizzes = JSON.parse(val);
        this.totalQuizNum = this.quizzes.results.length;
        if (this.quizzes !== null && this.totalQuizNum >= this.quizIndex + 1) {
            this.currentQuiz = this.quizzes.results[this.quizArray];
            this.answers = this.currentQuiz.incorrect_answers;
            this.correct = this.currentQuiz.correct_answer;
            this.explain = this.currentQuiz.explanation;
            this.url_image = this.currentQuiz.url_image;
            this.answers.push(this.correct);
            this.shuffle(this.answers);
        } else if (this.totalQuizNum < this.quizIndex + 1) {
            this.navCtrl.navigate(['/results']);
        };
    });
}

trackAnswers(answer) {
    this.storage.get('results').then((val) => {
        let results = val,
            quizResults = {
                yourAnswer: answer,
                correctAnswer: this.correct
            }
        results.push(quizResults);
        this.storage.set('results', results)
    });
}

handleAnswer(answer) {

    if (answer === this.correct) {
        this.trackAnswers(answer);
        this.navCtrl.navigate(['/feedback', true, this.correct, this.explain, this.totalQuizNum,this.url_image]);//,{checkAnswer: true, correctAnswer: this.correct,Explanation: this.explain,totalQuizNum: this.totalQuizNum,}]);
    } else {
        this.trackAnswers(answer);
        this.navCtrl.navigate(['/feedback', false, this.correct, this.explain, this.totalQuizNum,this.url_image]);

    }
}

ionViewDidLoad() {
    

}
triggerFunction() {
    console.log("Tiempo terminado");
    this.handleAnswer('no contestada');

}
}
