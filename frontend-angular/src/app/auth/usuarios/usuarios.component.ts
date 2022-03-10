import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public login: boolean = true;
  loginLogout(): void{
    this.login = true;
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
