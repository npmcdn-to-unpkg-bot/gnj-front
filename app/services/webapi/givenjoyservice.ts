import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Partner } from "../../models/partner";
import { LoginResult } from "../../models/loginresult";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GivenjoyService  {

    baseUrl: "http://givenjoy.fr:5000/api";
    baseUrlHttps: "https://givenjoy.fr:5005/api";


    constructor(private http: Http) {
        this.http = http;
    }

    getPartners():Promise<Partner[]> {
        return this.http.get("http://givenjoy.fr:5000/api/partner/info/city/Mulhouse")
                    .toPromise()
                    .then(res => res.json())
                    .catch(this.handleError);
    }

    getPartners2():Observable<Partner[]> {
        return this.http.get("http://givenjoy.fr:5000/api/partner/info/city/Mulhouse")
                    .map(res => res.json());
    }

    login(username:string, password:string):Promise<LoginResult>{
        var request = {"Login":username, "Password":password};
        return this.http.post("http://givenjoy.fr:5000/api/account/login", request)
                    .toPromise()
                    .then(res => res.json())
                    .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error("error ", error);
        return Promise.reject(error.message || error);
    }

}