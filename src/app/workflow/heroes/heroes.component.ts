import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesEndpointService } from '../commons/services/heroes-endpoint/heroes-endpoint.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  nameHeroe: string;
  constructor(private heroesService: HeroesEndpointService) {
  }
  allHeroes;


  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.allHeroes = this.heroesService.getHeroes();
  }

  searchHeroe() {
    this.allHeroes.subscribe(heroe => {
      heroe.filter((val) => val.name === this.nameHeroe
      );
    });
  }
}
