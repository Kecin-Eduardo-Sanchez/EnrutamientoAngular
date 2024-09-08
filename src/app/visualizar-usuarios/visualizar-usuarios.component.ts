import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-usuarios',
  templateUrl: './visualizar-usuarios.component.html',
  styleUrls: ['./visualizar-usuarios.component.css']
})
export class VisualizarUsuariosComponent implements OnInit {
  nombre: string | null = '';
  email: string | null = '';
  rol: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtiene los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'] || 'No disponible';
      this.email = params['email'] || 'No disponible';
      this.rol = params['rol'] || 'No disponible';
    });
  }
}
