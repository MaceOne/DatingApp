import { AlertifyService } from './../_sevices/alertify.service';
import { AuthService } from './../_sevices/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
    console.log(this.model);
  }

  loggedIn(){
    return this.auth.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }

}
