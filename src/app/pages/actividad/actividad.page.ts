import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }
  async control1() {
    const alert = await this.alertController.create({
      header: 'Caminar rápido',
      message: 'Andar rápido está al alcance de la mayoria de personas, lo puedes realizar facilmente en espacios de 30 a 60 minutos diarios. Este es un ejercicio que te ayudarán a evitar las excusas y lo puedes realizar en cualquier momento del día',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }
  async control2() {
    const alert = await this.alertController.create({
      header: 'Bailar',
      message:'El baile es una manera divertida que puedes usar para matenerte en forma. Es una alternativa en lugar de ir al gimnasio o practicar otro deporte siempre que se haga de manera continua. Además mejora tu salud emocional, ayudando a eliminar el estrés y mejorando tu confianza.',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }
  async control3() {
    const alert = await this.alertController.create({
      header: 'Nadar',
      message:'Nadar es una práctica que se puede hacer a cualquier edad y tiene la ventaja de que produce menos impacto sobre los huesos y desgasta menos las articulaciones que otros deportes. Lo mejor es que es ideal para quienes inician haciendo ejercicio y es un deporte muy completo para aquellas personas que realizan ejercicio habitualmente. ',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }
  async control4() {
    const alert = await this.alertController.create({
      header: 'Usar la caminadora',
      message:'Con la caminadora vas a poder caminar y trotar y obtener todos los beneficios que estas actividades aportan a tu salud sin salir de casa. Con la caminadora ya no hay excusas para organizar el tiempo y realizar ejercicio.',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }
  async control5() {
    const alert = await this.alertController.create({
      header: 'Trotar',
      message:'Trotar es un tipo de carrera lenta donde se deben seguir recomendaciones para evitar lesiones en las articulaciones como el calentamiento, trotar en terrenos blandos, mantener una postura correcta, usar zapatos con amortiguación y no excederse en la intensidad  y duración y así poder disfrutar de todos los beneficios que esta actividad aporta a tu salud sin consecuencias negativas.',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }
  async control6() {
    const alert = await this.alertController.create({
      header: 'Saltar la cuerda o lazo',
      message:'Es un entrenamiento rápido y efectivo para mantenerte en forma; no necesitas mucho material y se puede realizar en diferentes lugares. Este es un ejercicio simple que te ayudará en la coordinación y a fortalecer el corazón. Para este ejercicio se deben calentar las articulaciones para evitar lesiones.',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }

  async control7() {
    const alert = await this.alertController.create({
      header: 'Abdominales',
     message: 'Hacer abdominales es un ejercicio que fortalece los músculos del abdomen; esta actividad te ayuda a mejorar la postura, la respiración y a combatir la flacidez.',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }

  async control8() {
    const alert = await this.alertController.create({
      header: 'Sentadillas y/o uso de mancuernas',
     message: 'Hacer sentadillas fortalece los músculos de las piernas, gluteos  y cuadriceps; esta actividad te ayuda a aumentar la fuerza, quemar grasa y fortalecer tus articulaciones. Usar mancuernas en tus ejercicios de fortalecimiento muscular  te permitirá tener mayor ergonomía en tus ejercicios y te ayudará a quemar grasa. ',
      buttons: ['¡Entendido!']
      
    });

    await alert.present();
  }
}
