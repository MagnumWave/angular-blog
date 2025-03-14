import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover = "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/11/04/603587747-bb6cf1637f410601b905466e24a4d465.jpg";
  contentTitle = "MINHA NOTÍCIA";
  contentDescription = "Olá mundo!!!";

  constructor(){}

  ngOnInit(): void {

  }
}
