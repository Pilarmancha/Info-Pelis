import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroImagenPipe } from './filtro-imagen.pipe';
import { ImagenparesPipe } from './imagenpares.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe,
    ImagenparesPipe
  ],
  exports: [
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe,
    ImagenparesPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class PipesModule { }
