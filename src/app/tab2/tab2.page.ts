import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula [] = [];
  ideas: string[] = ['Spiderman', 'Iron man', 'El señor de los anillos', 'El caballero oscuro'];


  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController ) { }

  buscar( event ) {
    const valor: string = event.detail.value;

    if ( valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    // console.log(valor);
    this.buscando = true;

    this.moviesService.buscarPeliculas( valor )
    // tslint:disable-next-line: align
    .subscribe( resp => {
      // tslint:disable-next-line: no-string-literal
      this.peliculas = resp['results'];
      this.buscando = false;
    });

    }

    async detalle( id: string ) {

      const modal = await this.modalCtrl.create({
        component: DetalleComponent,
        componentProps: {
          id
        }
      });

      return await modal.present();

    }


  }









