import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
  })
  export class HomeService implements OnInit {        
    private _baseUrl: string;
    public files: string[]; 
  
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      this._baseUrl = baseUrl;
    }
  
    ngOnInit(): void {
      this.files = [];
    }

    public getFiles(hq: string): Observable<string[]> {
      return this.http.get<string[]>(this._baseUrl + `busca?hq=${hq}`)
    }

}
