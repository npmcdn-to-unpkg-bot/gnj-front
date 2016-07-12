import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/common';
import { HTTP_PROVIDERS } from "@angular/http";
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Login } from "../../models/login";
import { LoginResult } from "../../models/loginresult";
import { GivenjoyService } from "../../services/webapi/givenjoyservice";
import { AuthService } from "../../services/connexion/authservice";
import { WindowService } from "../../services/connexion/windowservice";

@Component({
  moduleId: module.id,
  selector: 'login',
  template: ` 
            <div id="loginpage" class="col-md-10 ">
                <h2 class="col-md-offset-2">S'identifier</h2>
                <div class="col-md-4 col-md-offset-2 col-sm-6 col-xs-12">
                    <form name="loginform" #loginform="ngForm" (ngSubmit)="onSubmit()">                     
                        <div>
                            {{error}}
                        </div>
                        <div class="input-group col-md-10 col-sm-12">
                            <input type="text" class="form-control" placeholder="Username" name="username" [(ngModel)]="login.username" 
                            ngControl="username" required />
                        </div>
                        <div class="input-group col-md-10 col-sm-12">
                            <input type="password" class="form-control" placeholder="Password" name="password" [(ngModel)]="login.password" required/>
                        </div>
                        <div  class="input-group">
                            <input type="checkbox" name="rememberme"  [(ngModel)]="login.rememberme" /><span> Se souvenir de moi</span>
                        </div>
                        <button class="btn btn-default" [disabled]="!loginform.form.valid">Connexion</button>
                        <div class="loginregister">
                            <a [routerLink]="['/register']">S'inscrire</a> | 
                            <a href="#">Mot de passe oublié</a>
                        </div>
                    </form>
                </div>
                <div id="socialconnexion" class="col-md-4 col-md-offset-2 col-sm-6 col-xs-12">
                    <div>
                        <a href="#" class="btn btn-primary btn-lg">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <span class="sociallabel">Se connecter avec Facebook</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" class="btn btn-danger btn-lg" (click)="googleConnexion()">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                            <span class="sociallabel">Se connecter avec Google+</span>
                        </a>
                    <div>
                <div>
            </div>
    `,
    providers: [HTTP_PROVIDERS, GivenjoyService, AuthService, WindowService],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {

    error:string;
    login:Login; 
    loginResult:LoginResult;

    constructor(private service:GivenjoyService, private auth:AuthService) {
        this.login=new Login("","",false);
    }

    onSubmit() {
        this.service.login(this.login.username, this.login.password)
                    .then(x => this.loginResult = x)
                    .catch(x => this.error = "Connexion erreur");
    }

    connect(model:LoginResult) {
        
    }

    googleConnexion() {
        this.auth.doLogin();

    }

}

