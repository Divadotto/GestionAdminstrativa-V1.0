import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './Login/login.component';
import { UsuarioComponent } from './Usuario/usuario.component';
import { ClienteComponent } from './Cliente/Cliente.component';
import { InventarioComponent } from './inventario/inventario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    LoginComponent,
    UsuarioComponent,
    ClienteComponent,
    InventarioComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Usuario', component: UsuarioComponent },
      { path: 'Cliente', component: ClienteComponent },
      { path: 'Inventario', component: InventarioComponent },
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
