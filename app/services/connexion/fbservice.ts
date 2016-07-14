import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';

@Injectable()
export class FbService {

    
    constructor(private http:Http) {
                   
        http.get('config/config.fb.json')
        .map(res => res.json())
        .subscribe((config:any) => {
            FB.init({
                "appId": config.appid,
                "xfbml":config.xfbml,
                "version":config.version
            });                    
        });

    }

    public connectFb() {
       
        FB.login(function (r:any) {
           FB.api('/me', 'get', { 
                    access_token: r.authResponse.accessToken,
                    fields: 'first_name,last_name,email'
            }, function(resp:any) {
                 let result = {
                    "status": r.status,
                    "accessToken": r.authResponse.accessToken,
                    "userID":r.authResponse.userID,
                    "expiresIn": r.authResponse.expiresIn,
                    "email":resp.email,
                    "lastname":resp.last_name,
                    "firstname":resp.first_name
                }
                console.log(result);
            });           
        },
        {
            scope: 'email',
        });
    }

    public isconnected():Boolean {
        var isConnected:string;

        FB.getLoginStatus(function(res) {
            isConnected = res.status;
        });
        
        return isConnected === "connected";
    }

    public disconnectFb() {
        FB.logout(function (result) {
            // TODO
        })
    }

}