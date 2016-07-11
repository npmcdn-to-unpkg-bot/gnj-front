import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    moduleId: module.id,
    selector: 'givenjoy',
    template: ` <navbar></navbar>
                <router-outlet></router-outlet>`,
    directives: [NavbarComponent, ROUTER_DIRECTIVES],
})

export class AppComponent {

 }