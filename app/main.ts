import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from "@angular/common";
import { provide } from "@angular/core";
import { provideForms } from "@angular/forms";
import { AppComponent } from './component/app/app.component';
import { APP_ROUTER_PROVIDERS } from "./router/router";

bootstrap(AppComponent, 
        [APP_ROUTER_PROVIDERS]);