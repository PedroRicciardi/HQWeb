import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { HomeService } from "../servico/home.service";

@Component({
  selector: 'app-batman',
  templateUrl: './batman.component.html'
})
export class BatmanComponent {

  public img: SafeUrl[]

  constructor(private buscar: HomeService, private router: Router, private sanitizer: DomSanitizer) { }

  public Batman() {
    this.buscar.getFiles("Batman").subscribe(val => this.img = val.map(v => {

      const xD = this.sanitizer.bypassSecurityTrustUrl(v)
      return xD
    }))
  }
}
