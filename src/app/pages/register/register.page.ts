import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email : string;
  public password : string;
  public name : string;

  constructor(private auth : AuthService,private router : Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.auth.register(this.email, this.password, this.name).then( aut => {
      this.router.navigate(['/home']);
      console.log(this.auth)
    }).catch(err => console.log(err))
  }

}
