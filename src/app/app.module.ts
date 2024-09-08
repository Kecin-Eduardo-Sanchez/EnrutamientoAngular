import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AProductoComponent } from './aproducto/aproducto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VisualizarUsuariosComponent } from './visualizar-usuarios/visualizar-usuarios.component';
import { VisualizarProductosComponent } from './visualizar-productos/visualizar-productos.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AProductoComponent,
    UsuarioComponent,
    VisualizarUsuariosComponent,
    VisualizarProductosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
