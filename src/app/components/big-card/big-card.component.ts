import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover = "";
  @Input()
  cardTitle = "";
  @Input()
  cardDescription = "";

  constructor(){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    //meu scaffold gerou esse método com esse throw junto.
    //esse throw estava interrompendo o ciclo de vida de renderizar os inputs passados.
  }


}
