import { Component } from '@angular/core';
import { CatsService } from '../services/cats/cats.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../interfaces/cats';

@Component({
  selector: 'app-createedit',
  templateUrl: './createedit.component.html',
  styleUrls: ['./createedit.component.scss'],
})
export class CreateeditComponent {
  edit: boolean = false;

  constructor(
    private catService: CatsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
  }
  /* submitCat() {
    this.catService.createCat().subscribe({
      next: (res: any) => {},
    });
  }

  updateCat() {
    this.catService.updateCat().subscribe({
      next: (res: any) => {},
    });
  } */
}
