import { LoginServiceService } from './../../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder, private loginService:LoginServiceService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit(data) {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }else{
      this.loginService.getToken(data).subscribe(token=>{
        localStorage.setItem('jwt',(<any>token).token);
        this.router.navigate(['/clube-sports'])
      });
    }
  }
}
