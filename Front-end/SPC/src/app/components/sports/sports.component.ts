import { Sport, Entities_sportifs } from './../../Model/sport';
import { ClubSportsService } from './../../services/club-sports.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  club:Entities_sportifs;
  id:number = 3;
  constructor(private srvc:ClubSportsService,
              private activeRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.srvc.getAllentity_sportife_de_clube(this.id).subscribe( (e:Entities_sportifs) => {
      this.club = e;
      
    })
  }

}
