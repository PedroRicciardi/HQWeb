import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ISinopse } from "../interface/ISinopse";


@Injectable({
  providedIn: "root"

  })
  export class SinopseService implements OnInit {        
    private _baseUrl: string;
  
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      this._baseUrl = baseUrl;
  }

  public obtersinopse(name: string): Observable<ISinopse> {
    console.log(name)
    return this.http.get<ISinopse>(this._baseUrl + "sinopse/" + name);
  }

  ngOnInit(): void { }
}
