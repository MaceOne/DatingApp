import { AlertifyService } from './../../_sevices/alertify.service';
import { UserService } from './../../_sevices/user.service';
import { AuthService } from './../../_sevices/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from './../../_models/user';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  constructor(private authService: AuthService, private userService: UserService, private alert: AlertifyService) { }

  ngOnInit() {
  }

  sendLike(id: number)  {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.alert.success('You have liked: ' + this.user.knownAs);
    }, error => {
      this.alert.error(error);
    });
  }
}
