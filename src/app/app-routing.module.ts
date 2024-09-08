import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { AProductoComponent } from './aproducto/aproducto.component';
import { VisualizarUsuariosComponent } from './visualizar-usuarios/visualizar-usuarios.component';
import { VisualizarProductosComponent } from './visualizar-productos/visualizar-productos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'aproductos', component: AProductoComponent },
  { path: 'MostrarUsuarios', component: VisualizarUsuariosComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'MostrarProducto', component: VisualizarProductosComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
