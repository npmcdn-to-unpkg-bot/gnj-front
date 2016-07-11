import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

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
                        <li><a [routerLink]="['/login']">Connexion</a></li>                      
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>`,
  styles: [],
  directives: [ROUTER_DIRECTIVES]
})


export class NavbarComponent  {
  
}