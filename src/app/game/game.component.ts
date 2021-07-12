import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {GameService} from "../game.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  //Récupération de l'id du jeu dans l'url
  idGame = this.route.snapshot.paramMap.get('id') || '';

  //Récupération des cartes du jeu depuis l'API via le service
  cards: any;

  //Stockage des cartes dont la bonne réponse est donnée
  responseCards: any[] = [];



  //Déclaration du formulaire pour la réponse aux questions
  responseForm = this.formBuilder.group({
    response: ''
  })


  constructor(private formBuilder: FormBuilder,
              private gameService:GameService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.gameService.getCards(this.idGame).subscribe(cards => {
      this.cards = cards;
      console.log('Tableau Init: ' + this.cards[0].date);
    });

  }

  postResponse() {
    //Test de la réponse
    // ajout de la carte à la liste des réponses
    // Affichage des cartes

    //Récupération de l'année de la carte (Bonne réponse)
    let cardDate = this.cards[0].date.substring(0,4);
    console.log('Année de la carte ' + cardDate);
    console.log('Année du Formulaire '+ this.responseForm.get('response')?.value)

    //Test entre les deux dates
    if(this.responseForm.get('response')?.value == cardDate){
      this.responseCards.push(this.cards[0]);
      this.cards.shift();
      console.log('Bonne réponse');
      this.responseForm.get('response')?.reset();
    }
    else {
      console.log('Mauvaise réponse')
      //traitement sur le formulaire
      //Entourer le formulaire en rouge avec du style
      this.responseForm.get('response')
    }


  }
}
