import { Component } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeService } from '../servico/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public search: string
  public img: SafeUrl[]

  constructor(private router: Router, private buscar: HomeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public Procurar(procurar) {
    this.buscar.getFiles(`${this.search}`).subscribe(val => this.img = val.map(v => {

      const xD = this.sanitizer.bypassSecurityTrustUrl(v)
      return xD

      // Fazer com que ele vá direto para a rota de "resultado", mostrando todas as hqs com o nome digitado na busca
    }))

  }

}
