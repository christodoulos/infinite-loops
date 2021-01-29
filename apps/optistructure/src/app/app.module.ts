import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

import {
  OptistructureTopbarComponent,
  OptistructureSidebarComponent,
  OptistructureLandingComponent,
  SidebarUserComponent,
} from '@infinite-loops/optistructure-ui';

const routes: Routes = [
  { path: '', component: OptistructureTopbarComponent, outlet: 'topbar' },
  { path: '', component: OptistructureSidebarComponent, outlet: 'sidebar' },
  { path: '', component: OptistructureLandingComponent },
  {
    path: 'user',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('@infinite-loops/optistructure-ui').then(
        (m) => m.OptistructureUiModule
      ),
  },
  {
    path: 'user',
    component: SidebarUserComponent,
    outlet: 'sidebar',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@infinite-loops/auth').then((m) => m.AuthModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
