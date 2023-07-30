import { Component } from '@angular/core';
import { Image } from '../interfaces/images';
import { PicturesService } from '../services/pictures/pictures.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  image: Image[] = [];
  constructor(private pictureService: PicturesService) {}

  ngOnInit() {
    this.pictureService.getRandomCatsImages().subscribe((images) => {
      this.image = images;
    });
  }

  markAsFavorite(id: string): void {
    this.pictureService.markImageAsFavorite(id).subscribe({
      next: (favoriteImage: Image) => {
        // Código para manejar la respuesta exitosa (cuando se recibe la imagen marcada como favorita)
        console.log('Imagen marcada como favorita:', favoriteImage);

        // A continuación, actualiza la propiedad 'isFavorite' de la imagen con el id correspondiente en el arreglo 'image'
        const imageIndex = this.image.findIndex((img) => img.id === id);
        if (imageIndex !== -1) {
          this.image[imageIndex].isFavorite = true;
        }
      },
      error: (error: any) => {
        // Código para manejar el error, si ocurre alguno
        console.error('Error al marcar imagen como favorita:', error);
      },
      complete: () => {
        // Código para manejar la finalización del Observable, si es necesario
        console.log('Suscripción completada');
      },
    });
  }
}
