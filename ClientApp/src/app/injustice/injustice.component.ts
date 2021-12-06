import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { HomeService } from "../servico/home.service";


@Component({
  selector: 'app-counter-component',
  templateUrl: './injustice.component.html',
  styleUrls: ['./injustice.component.css']
})
export class InjusticeComponente {
  public currentCount = 0;



  public img: SafeUrl[]

  constructor(private buscar: HomeService, private router: Router, private sanitizer: DomSanitizer) { }

  public incrementCounter() {


    this.buscar.getFiles("Injustice").subscribe(val => this.img = val.map(v => {

      const xD = this.sanitizer.bypassSecurityTrustUrl(v)
      return xD
    }))

  }
}
