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
  //public usuariosLogin = new IUsuarios();

  public login: boolean = true;

  loginLogout(): void{
    this.login = true;
  };
  
  constructor(
    private usuariosService: ServicesService
  ) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios(): void{
    this.usuariosService.buscarUsuarios().subscribe(data => {
      this.usuarios = data;

      // Verificando se o nome e o perfil estão cadastrados no banco como Anderson e Administrador
      // if(this.usuarios[0].nomeUser == "Anderson" && this.usuarios[0].perfilUser == "Administrador" &&
      //    this.usuarios[0].passwordUser == "1234567"){

      //   this.login = true;

      //    } else {
      //      this.login = false;
      //    }
         
      });
  }


}
