import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
    providers: [
        AuthGuardService,
        AuthenticationService
    ]
})
export class CoreModule {
}

