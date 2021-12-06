import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeUrl } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../servico/home.service";

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html'
})
export class LeitorComponent {

  public img: SafeUrl[]
  public name: string
  public cap: string
  public pag: string
  public caminho: string

  constructor(route: ActivatedRoute) {
    route.params.subscribe({
      next: (p) => {
        this.name = p.name
        this.cap = p.cap
        this.pag = p.pag
        this.caminho = `assets/hqs/${p.name}/${p.cap}/${p.pag}.png`
      }
    })

  }
}
