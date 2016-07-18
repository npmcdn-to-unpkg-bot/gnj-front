import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from "@angular/common";
import { provide } from "@angular/core";
import { provideForms } from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";


import { AppComponent } from './component/app/app.component';
import { APP_ROUTER_PROVIDERS } from "./router/router";
import { FbService } from "./services/connexion/fbservice";
import { GivenjoyService } from "./services/webapi/givenjoyservice";
import { AuthService } from "./services/connexion/authservice";
import { WindowService } from "./services/connexion/windowservice";

bootstrap(AppComponent, 
        [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, FbService, GivenjoyService, AuthService, WindowService]);