import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    rol: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Redirige a la página de visualización con los parámetros
    this.router.navigate(['/MostrarUsuarios'], {
      queryParams: this.usuario
    });
  }
}
