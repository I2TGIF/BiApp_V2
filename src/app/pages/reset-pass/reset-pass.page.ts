import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
  public email:string="";
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  sendLinkReset(){

    if(this.email != ""){

      this.authService.resetPassword(this.email).then(() => {
        console.log('enviado');
      }).catch(() => {
        console.log('error');
      })
    } else {
      alert('yasta loco, me voy a la mierda');
    }

    this.authService
  }

}
