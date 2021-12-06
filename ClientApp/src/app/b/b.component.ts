import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "../servico/home.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html'
})
export class BComponent {

  type?: string;
  cap?: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe({
      next: (p) => {
        this.type = p.type
        this.cap = p.cap
      }
    })

  }
}
