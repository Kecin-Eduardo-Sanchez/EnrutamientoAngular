import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-productos',
  templateUrl: './visualizar-productos.component.html',
  styleUrls: ['./visualizar-productos.component.css']
})
export class VisualizarProductosComponent implements OnInit {
  nombre: string | null = 'No disponible';
  descripcion: string | null = 'No disponible';
  precio: string | null = 'No disponible';
  tipo: string | null = 'No disponible';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtiene los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'] || 'No disponible';
      this.descripcion = params['descripcion'] || 'No disponible';
      this.precio = params['precio'] || 'No disponible';
      this.tipo = params['tipo'] || 'No disponible';
    });
  }
}
