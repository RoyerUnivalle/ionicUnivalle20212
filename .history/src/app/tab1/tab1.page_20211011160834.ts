import { Component } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public estudiantes: any;

  constructor(private service: EstudiantesService) {
    this.getData();
  }

  getData(){
    this.service.getData()
    .subscribe(
      response => {
        console.log (response);
        this.estudiantes = response.estudiantes;
      }
    );
  }

}
