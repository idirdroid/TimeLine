import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../game.service";
import {Card} from "../card";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  games: any;
  editGame : any;
  editSelectedCard : any;
  cards : any;
  response = '';

  //Récupération de l'id du jeu dans l'url
  idTimeLine = this.route.snapshot.paramMap.get('id') || '';

  //Déclaration du formulaire d'édition
  editTimeLineForm = this.formBuilder.group({
    name : '',
    category: '',
    creationDate: ''
  })

  editCardForm = this.formBuilder.group({
    cardName : '',
    date: '',
    imageUrl: '',
    description: ''
  })

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private gameService: GameService) { }

  ngOnInit(): void {
    //Récupération des cartes
    this.gameService.getCards(this.idTimeLine).subscribe(cards => {
      this.cards = cards;
      //console.log(this.cards)
    })

    //Récupérer la timeline en cours d'étition
    this.gameService.getGames().subscribe(games => {
      this.games = games;
      this.editGame = this.games.find((i: any) => i.id == this.idTimeLine)
      console.log('Timeline: ' + this.idTimeLine + ' :' + this.cards[0].name);
      this.editTimeLineForm.patchValue({
        name : this.editGame.name,
        category: this.editGame.category,
        creationDate: this.editGame.creationDate
      })
    });


  }

  editTimeLine() {
    //Enregistrement des modifications via API
    this.editGame.category = this.editTimeLineForm.get('category')?.value
    this.editGame.name = this.editTimeLineForm.get('name')?.value
    this.editGame.creationDate = this.editTimeLineForm.get('creationDate')?.value
    console.log(this.editGame)
    return this.gameService.updateTimeLine(this.editGame).subscribe((response : any) => {
      this.response = response.id;
      console.log(response)
    })
  }

  editCard() {
    //Construction de la carte
    this.editSelectedCard = {
      id: this.editCardForm.get('id')?.value,
      name: this.editCardForm.get('name')?.value,
      date: this.editCardForm.get('date')?.value,
      imageUrl: this.editCardForm.get('imageUrl')?.value,
      description: this.editCardForm.get('description')?.value
    }

    console.log(this.editSelectedCard)

    /*return this.gameService.updateCard(editCard).subscribe((response : any) => {
      console.log(response)
    })*/
  }

  newCard() {
    this.editCardForm.reset();
  }

  getCardInfo(card : Card) {
    console.log(card)

    this.editCardForm.patchValue(
      {
        cardName : card.name,
        date: card.date,
        imageUrl: card.imageUrl,
        description : card.description
    });
  }


  deleteCard(deleteCard: Card) {
    //Suppression d'une carte
    console.log(deleteCard)
    this.gameService.deleteCard(deleteCard).subscribe((response : any) =>{
      console.log(response);
    })
  }
}
