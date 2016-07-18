import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginInfo } from '../../models/logininfo';
import "rxjs/add/operator/toPromise";

@Injectable()
export class FbService {
    ///private eventEmitter = new EventEmitter(); 
    
    constructor(private http:Http) {
    }

    public connectFb() {
        var _that = this;
        this.http.get('config/config.fb.json')
            .map(res => res.json())
            .subscribe(config => {
                FB.init({
                    "appId": config.appid,
                    "xfbml":config.xfbml,
                    "version":config.version
                });           
                FB.login(function (r:any) {
                    FB.api('/me', 'get', { 
                            access_token: r.authResponse.accessToken,
                            fields: 'first_name,last_name,email'
                    }, function(resp:any) {
                        var info = new LoginInfo(
                            r.status,
                            r.authResponse.accessToken,
                            r.authResponse.userID,
                            r.authResponse.expiresIn,
                            resp.email,
                            resp.first_name,
                            resp.last_name,
                            "Facebook",
                            null,
                            null
                        );
                        localStorage.setItem("ConnexionMock", JSON.stringify(info));
                    });  
                }, 
                {scope: 'email'});
            });
        
    }



    public isconnected():Boolean {
        var result = localStorage.getItem("ConnexionMock");
        
        if (result == null || result == "undefined" || result == "")
            return false;

        var info = JSON.parse(result);
        return (info.Status === "connected")
    }

    public fullname():String {
         var result = localStorage.getItem("ConnexionMock");
        
        if (result == null || result == "undefined" || result == "")
            return "";

        var info = JSON.parse(result);
        return info.FirstName + " " + info.LastName;
    }

    public disconnectFb() {
         localStorage.setItem("ConnexionMock", JSON.stringify({"Status":false}));
    }

    private handleError(error:any) {
        console.error("error ", error);
        return Promise.reject(error.message || error);
    }

}