import { ClubSportsService } from './../../../services/club-sports.service';
import { Entities_sportifs } from './../../../Model/sport';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-sports',
  templateUrl: './list-sports.component.html',
  styleUrls: ['./list-sports.component.css']
})
export class ListSportsComponent implements OnInit {

  club:Entities_sportifs;
  id:number = 3;
  constructor(private srvc:ClubSportsService) { }

  ngOnInit() {
    this.srvc.getAllentity_sportife_de_clube(this.id).subscribe( (e:Entities_sportifs) => {

      this.club = e;
      // console.log(this.club);
      
    })
  }

}
