import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() togglerSideBar: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {
  }
  toggleSideBar() {
    this.togglerSideBar.emit();
      }
    
      
  LogOut(){
    
    localStorage.removeItem('jwt');
    this.router.navigate(['/loggin'])
}
}
