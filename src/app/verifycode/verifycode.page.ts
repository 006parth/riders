import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-verifycode',
  templateUrl: './verifycode.page.html',
  styleUrls: ['./verifycode.page.scss'],
})
export class VerifycodePage implements OnInit {

  constructor(public router: Router,public menu: MenuController) { }

  ngOnInit() {
  this.menu.enable(false);
  }

  verifycode() {
    this.router.navigate(['resetpwd']);
  }
}
