import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aproducto',
  templateUrl: './aproducto.component.html',
  styleUrls: ['./aproducto.component.css']
})
export class AProductoComponent {
  producto = {
    nombre: '',
    descripcion: '',
    precio: '',
    tipo: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    
    this.router.navigate(['/visualizar-productos'], {
      queryParams: this.producto
    });
  }
}
