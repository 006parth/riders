import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.page.html',
  styleUrls: ['./resetpwd.page.scss'],
})
export class ResetpwdPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  resetpassword() {
    this.router.navigate(['login']);
  }
}
