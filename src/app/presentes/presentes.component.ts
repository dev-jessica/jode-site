import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Presente } from '../models/presente.model';
import { CategoriaService } from '../services/categoria.service';
import { PresenteService } from '../services/presente.service';

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})
export class PresentesComponent implements OnInit {

  categorias: Categoria[] = [];
  produtos: Presente[] = [];

  constructor(private categoriaService: CategoriaService, private presenteService: PresenteService) { }

  ngOnInit(): void {
    this.getAllCategoria();
    this.getAllPresentes();
  }

  getAllCategoria() {
    this.categoriaService.getCategoria()
      .subscribe((categorias) => {
        this.categorias = categorias
      })
  }

  getAllPresentes() {
    this.presenteService.getAll()
      .subscribe((presentes) => {
       this.produtos = presentes;      })
  }

  getPresentesbyCategoria(id:number){
    this.presenteService.getbyCategoria(id).subscribe((presentes)=>{
      this.produtos = presentes
    })

  }

}
