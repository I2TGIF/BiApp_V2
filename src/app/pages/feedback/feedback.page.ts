import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  answerIsCorrect: boolean;
  correctAnswer: string;
  currentIndex: number;
  totalQuizNum: number;
  Explanation: string;
  arraytest: any;
  Url_image:string;

  constructor(private navCtrl:Router, public navParams: ActivatedRoute,
    private storage: Storage) {
      var result = navParams.snapshot.paramMap.get('checkAnswer'),
      correctAnswer = navParams.snapshot.paramMap.get('correctAnswer'),
      Explanation = navParams.snapshot.paramMap.get('Explanation'),
      Url_image = navParams.snapshot.paramMap.get('Url_image'),
      total = navParams.snapshot.paramMap.get('totalQuizNum')
    this.answerIsCorrect = (/true/i).test(result);
    this.correctAnswer = correctAnswer;
    this.totalQuizNum = parseInt(total);
    this.Explanation = Explanation;
    this.Url_image = Url_image;
   }
   


  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get('quizIndex').then((val) => {
      this.currentIndex = val;
      this.storage.set('quizIndex', this.currentIndex + 1);
    });
    console.log()
  }

  nextQuiz() {
    this.navCtrl.navigate(['/game-view']);
    this.storage.get('quizIndex').then((val) => {
      let testNumber = val;
      console.log("VALOR DE VAL " + testNumber);
    });
  }

}

