import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

import {
  OptistructureTopbarComponent,
  OptistructureSidebarComponent,
} from '@infinite-loops/optistructure-ui';

const routes: Routes = [
  { path: '', component: OptistructureTopbarComponent, outlet: 'topbar' },
  { path: '', component: OptistructureSidebarComponent, outlet: 'sidebar' },
  {
    path: 'app',
    loadChildren: () =>
      import('@infinite-loops/optistructure-ui').then(
        (m) => m.OptistructureUiModule
      ),
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
