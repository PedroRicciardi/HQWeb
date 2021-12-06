import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "../servico/home.service";
import { SinopseService } from '../servico/sinopse.service';


@Component({
  selector: 'app-sinopse',
  templateUrl: './sinopse.component.html',
  styleUrls: ['./sinopse.component.css'],
  inputs: ['title', 'description', 'publisher','status']
})
export class SinopseComponent  implements OnInit {
  private name ?: string 
  title?: string;
  description?: string;
  publisher?: string;
  status?: string;

  constructor(route: ActivatedRoute, private Sinopseservice: SinopseService) {
      route.params.subscribe({
      next: (p) => {
        this.name = p.name
          console.log(p);   
      }

    })
  }

  ngOnInit() {
    this.getsinopse();
  }

  getsinopse() {
    this.Sinopseservice.obtersinopse(this.name).subscribe({
      next: (sinopse) => {
        this.description = sinopse.description
        this.status = sinopse.status
        this.title = sinopse.title
        this.publisher = sinopse.publisher
        
      }
    })
  }

  // pegar dados que o back retorna e passar para o componente.
}
    //route.params.subscribe({
    //  next: (p) => {
    //    this.service.getSinopse(p.name)
    //    console.log(p);
    //  }

    //})
