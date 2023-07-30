import { Component } from '@angular/core';
import { CatsService } from '../services/cats/cats.service';
import { Cat } from '../interfaces/cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent {
  cats: Cat[] = [];
  edit: boolean = false;

  constructor(private catService: CatsService) {}
  convertStr(obj: any): string {
    return obj.toString();
  }
  ngOnInit() {
    this.catService.getCats().subscribe({
      next: (res: any) => {
        this.cats = res;
      },
    });
  }
  deleteCat(id: string) {
    this.catService.deleteCat(id).subscribe({
      next: (res: any) => {
        this.cats = res;
      },
    });
  }
}
