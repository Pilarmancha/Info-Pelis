import { Component } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,

  };

  constructor(public dataLocal: DataLocalService,
              private modalCtrl: ModalController ) {}


  async cargarDatos() {
  this.peliculas = await this.dataLocal.cargarFavoritos();
  }

  ionViewWillEnter() {
    this.cargarDatos();
  }

  async verDetalle( id: string ) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id,
      }
    });
    modal.onDidDismiss().then(data => {
      this.cargarDatos();
    });
    modal.present();
  }

}
