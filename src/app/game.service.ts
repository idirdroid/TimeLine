import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "./card";
import {TimeLine} from "./time-line";


@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = 'http://localhost:8080/api/timeline'

  constructor(private http: HttpClient) { }

  getCards(id: any) {
    //Récupération du jeu en cours via API
    //http://localhost:8080/api/timeline
    //return id;
    return this.http.get<Card[]>(`${this.baseUrl}/${id}/card`);
  }

  getGames(){
    return this.http.get<TimeLine[]>(`${this.baseUrl}`)
  }

  updateTimeLine(editGame: TimeLine) {
    //Appel PUT vers l'API
    return this.http.put(this.baseUrl, editGame)
  }
}
