import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';
import { IUsuarios } from '../model/IUsuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: IUsuarios[] = [];

  // public login: boolean = true;
  // loginLogout(): void{
  //   this.login = true;
  // };
  
  constructor(
    private usuariosService: ServicesService
  ) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios(): void{
    this.usuariosService.buscarUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }


}
