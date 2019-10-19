import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProdsComida: Producto[];
  arrProdsBebida: Producto[];
  arrproductosSeleccionados: Producto[];

  constructor() {

    this.arrProdsComida = [

      new Producto('Cocido Madrileño', 'http://www.lacasadelasbrasas.com/wp-content/uploads/2018/08/cocido-madrileno-400x400.jpg', 3.59),
      new Producto('Marmitako', 'http://cadiz.cosasdecome.es/wp-content/uploads/2017/10/marmitako-400x400.jpg', 4.20),
      new Producto('Lentejas', 'https://www.tappers.es/wp-content/uploads/2019/04/23.-LENTEJAS-CON-LACON-AHUMADO-400x400.jpg', 3.00),
      new Producto('Fabada', 'http://ruidoenlacocina.es/wp-content/uploads/2018/08/ruidoenlacocina_fabada-asturiana-400x400.jpg', 5.00)

    ]

    this.arrProdsBebida = [

      new Producto('Coca Cola', 'https://www.pmc.es/producto/400x400/COCACOLA.jpg', 1.50),
      new Producto('Agua Mineral', 'https://litrosdeagua.com/wp-content/uploads/2017/03/Lanjaron-Agua-Mineral-Natural-75-cl-400x400.png', 1.20),
      new Producto('Tinto Verano', 'http://bares.com.ph/wp-content/uploads/2018/03/Lerele-Tinto-De-Verano-1-400x400.jpg', 1.80),
      new Producto('Vino', 'https://gourmettia.com/wp-content/uploads/2015/06/vino-tinto-crianza-12-botellas-400x400.jpg.webp', 1.30)

    ]

    this.arrproductosSeleccionados = []


  }

  onProductosSeleccionados($event) {

    this.arrproductosSeleccionados.push($event);
    console.log(this.arrproductosSeleccionados);
  }




}
