import { Component } from '@angular/core';
import { Image } from '../interfaces/images';
import { PicturesService } from '../services/pictures/pictures.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  images: Image[] = [];
  allImagesLoaded: boolean = false;
  favoriteImages: Image[] = [];
  constructor(private pictureService: PicturesService) {}

  ngOnInit() {
    this.pictureService.getRandomCatsImages().subscribe((images) => {
      this.images = images;
      this.allImagesLoaded = true;
    });
  }

  markAsFavorite(imageId: string) {
    const index = this.images.findIndex((img) => img.id === imageId);
    if (index !== -1) {
      const isFavorite = this.images[index].isFavorite;

      // Llamar al servicio para marcar o desmarcar la imagen como favorita
      this.pictureService.markImageAsFavorite(imageId).subscribe({
        next: () => {
          this.images[index].isFavorite = !isFavorite; // Actualizar el estado local

          // Si la imagen es favorita, la quitamos del arreglo de imágenes favoritas
          if (isFavorite) {
            const favoriteIndex = this.favoriteImages.findIndex(
              (img) => img.id === imageId
            );
            if (favoriteIndex !== -1) {
              this.favoriteImages.splice(favoriteIndex, 1);
            }
          } else {
            // Si la imagen no es favorita, la agregamos al arreglo de imágenes favoritas
            this.favoriteImages.push(this.images[index]);
          }
        },
        error: (error) => {
          // Manejar el error en caso de que la llamada al servicio falle
          console.error('Error al marcar la imagen como favorita:', error);
          // Restaurar el estado anterior en caso de error
          this.images[index].isFavorite = isFavorite;
        },
      });
    }
  }
}
