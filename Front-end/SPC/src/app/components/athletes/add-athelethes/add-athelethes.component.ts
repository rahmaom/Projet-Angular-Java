import { Sport } from './../../../Model/sport';
import { ClubSportsService } from './../../../services/club-sports.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Athlet } from 'src/app/Model/athlet';

@Component({
  selector: 'app-add-athelethes',
  templateUrl: './add-athelethes.component.html',
  styleUrls: ['./add-athelethes.component.css']
})
export class AddAthelethesComponent implements OnInit {
  id;
  checkoutForm1;
  athlets: Athlet[];

  constructor(
    private formBuilder: FormBuilder,
    private clubSport:ClubSportsService, 
    private activeRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    var id = +this.activeRoute.snapshot.paramMap.get('id');
    this.id=id;
    console.log(this.id);
    let sport = new Sport(this.id);
    this.checkoutForm1 = this.formBuilder.group({
    nom: '',
    prenom:'',
    age:Number,
    date_de_naissance:Date,
    image: '',
    sport:sport
  });
    
  }
  onSubmit1(customerData){
    
    if (this.clubSport.saveAthlète(customerData).subscribe(()=> {console.log("well executed")
  
  },
    (err)=> {console.log(err)}
    )) {
      this.router.navigate(["/athletes/"+this.id]);
      return false;

    }
  }
}
