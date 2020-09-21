import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

peliculasRecientes: Pelicula[] = [];
populares: Pelicula[] = [];


  constructor( private moviesService: MoviesService,
               private dataLocal: DataLocalService) {}


  ngOnInit() {
    this.getCartelera();
    this.getPopulares();
    this.dataLocal.cargarFavoritos();
  }


  cargarMas() {
    this.getPopulares();
  }

  getCartelera() {
    this.moviesService.getCartelera()
      .subscribe( resp => {
        this.peliculasRecientes = resp.results;
    });
  }

  getPopulares() {
    this.moviesService.getPopulares()
      .subscribe( resp => {
        const arrTem = [ ...this.populares, ...resp.results ];
        this.populares = arrTem;
    });
  }
}
