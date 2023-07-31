import { Component } from '@angular/core';
import { CatsService } from '../services/cats/cats.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../interfaces/cats';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PicturesService } from '../services/pictures/pictures.service';
import { Image } from '../interfaces/images';
@Component({
  selector: 'app-createedit',
  templateUrl: './createedit.component.html',
  styleUrls: ['./createedit.component.scss'],
})
export class CreateeditComponent {
  isCollapsed = false;
  edit = false;
  paramsId: any;
  dataLoaded: boolean = false;
  favoriteImages: Image[] = [];
  selectedImage: string = '';
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    race: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(0)]),
    photo: new FormControl('', Validators.required),
  });

  constructor(
    private catService: CatsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pictureService: PicturesService
  ) {}
  selectImage(url: string) {
    this.selectedImage = url;
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.pictureService.getAllFavoritesImages().subscribe({
      next: (res: any) => {
        this.favoriteImages = res;
      },
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      this.edit = params['edit'];
    });
    this.paramsId = this.activatedRoute.snapshot.params;
    if (this.paramsId && this.paramsId['id']) {
      this.catService.getCatById(this.paramsId['id']).subscribe({
        next: (res: any) => {
          this.form.patchValue({
            name: res.name,
            race: res.race,
            age: res.age,
            photo: res.photo,
          });
          this.selectedImage = res.photo;
          this.dataLoaded = true;
        },
      });
    } else {
      this.dataLoaded = true;
    }
  }
  onSubmit() {
    this.form.patchValue({ photo: this.selectedImage });
    if (this.form.invalid) {
      alert(
        'Todos los campos son obligatorios y deben estar correctamente llenados.'
      );
      return;
    }
    const isEditing = this.edit;
    const catData: Cat = {
      name: this.form.value.name || '',
      race: this.form.value.race || '',
      age: Number(this.form.value.age) || 0,
      photo: this.selectedImage || '',
    };

    if (isEditing) {
      this.catService.updateCat(this.paramsId['id'], catData).subscribe({
        next: (res: any) => {},
      });
    } else {
      this.catService.createCat(catData).subscribe({
        next: (res: any) => {},
      });
    }
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });

    this.form.reset();
  }
}
