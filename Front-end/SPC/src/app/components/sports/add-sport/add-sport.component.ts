import { Entities_sportifs } from './../../../Model/sport';
import { ClubSportsService } from './../../../services/club-sports.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {

  checkoutForm1;

  constructor(
    private formBuilder: FormBuilder,
    private srvc:ClubSportsService, 
    private activeRoute: ActivatedRoute,
    private router: Router) {
      let clubb= new Entities_sportifs(3);
    this.checkoutForm1 = this.formBuilder.group({
      nom: '',
      image: '',
      clubs:clubb
    });
   }

  ngOnInit() {
  }
  onSubmit1(customerData){
   
    if ( this.srvc.save(customerData).subscribe(()=> {console.log("well executed")},
    (err)=> {console.log(err)}
    )) {
      this.router.navigate(["/clube-sports"]);
      return false;

    }
  }
}
