import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FbService } from "../../services/connexion/fbservice";

@Component({
  moduleId: module.id,
  selector: 'navbar',
  template: `<div>
                <nav class="navbar navbar-fixed-top navbar-inverse">
                  <div class="container-fluid">
                      <div class="navbar-header">
                        <a [routerLink]="['/home']" class="navbar-brand" >Give'n'Joy</a>
                      </div>
                      <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                          <li><a [routerLink]="['/partners']">Nos partenaires</a></li>              
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                          <li *ngIf="!authenticated"><a [routerLink]="['/login']">Se connecter</a></li> 
                          <li *ngIf="authenticated" class="dropdown"> 
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> 
                              {{fullname}} <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                              <li><a href="#" role="menuitem" >Mes dons</a></li>
                              <li><a href="#" role="menuitem" >Mes cartes bancaires</a></li>
                              <li><a href="#" role="menuitem" >Mon profil</a></li>
                            </ul>
                          </li> 
                          <li *ngIf="authenticated"><a (click)="logout()">Se déconnecter</a></li>         
                        </ul>
                      </div>
                    </div>
                </nav>
            </div>`,
  styles: [],
  directives: [ROUTER_DIRECTIVES]
})


export class NavbarComponent  {

  constructor(private fb:FbService) {

  }

  get authenticated():Boolean {  
    return this.fb.isconnected();
  }

  get fullname():String {
    return this.fb.fullname();
  }

  logout() {
    this.fb.disconnectFb();  
  }

}