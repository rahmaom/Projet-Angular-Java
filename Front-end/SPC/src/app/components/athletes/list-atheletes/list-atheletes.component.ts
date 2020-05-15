import { Athlet } from './../../../Model/athlet';
import { ClubSportsService } from './../../../services/club-sports.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-atheletes',
  templateUrl: './list-atheletes.component.html',
  styleUrls: ['./list-atheletes.component.css']
})
export class ListAtheletesComponent implements OnInit {
  id;
  athlets: Athlet[];
  constructor(private clubSport:ClubSportsService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    var id = +this.activeRoute.snapshot.paramMap.get('id');
    this.id=id;
    this.clubSport.allathletes(this.id).subscribe((e : Athlet[]) => {
      this.athlets=e;      
    });
  }

  deleteAthlete(id){
    this.clubSport.delete(id)
    .subscribe(()=> {
      this.athlets=this.athlets.filter(athlet=> athlet.id != id)
    })

  }

}
