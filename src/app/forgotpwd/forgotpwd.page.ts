import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.page.html',
  styleUrls: ['./forgotpwd.page.scss'],
})
export class ForgotpwdPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  verifyEmail() {
    this.router.navigate(['verifycode']);
  }
}
