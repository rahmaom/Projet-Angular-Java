import { ClubSportsService } from './../../../services/club-sports.service';
import { Athlet } from './../../../Model/athlet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-athelethes',
  templateUrl: './show-athelethes.component.html',
  styleUrls: ['./show-athelethes.component.css']
})
export class ShowAthelethesComponent implements OnInit {
  id;
  athlets: Athlet;
  constructor(private srvc:ClubSportsService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    var id = +this.activeRoute.snapshot.paramMap.get('id');
    this.id=id;
    this.srvc.getAthletById(this.id).subscribe((e : Athlet) => {
      this.athlets=e;
      
    });
  }

}
