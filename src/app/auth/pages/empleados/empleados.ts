import { Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../../interface/empleado.dto';
import { tap } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleados',
  imports: [CurrencyPipe],
  templateUrl: './empleados.html',
})
export class Empleados implements OnInit{

  private empleadoService=inject(EmpleadoService)
  private auhService=inject(AuthService)

  empleado=signal<Empleado |null>(null)
  empleados=signal<Empleado[]>([])
  private router=inject(Router)
  bandera=signal(false)

  ngOnInit(): void {

    this.empleadoService.getEmpleados()
    .pipe(
      tap(response => this.empleado.set(response))
    )
    .subscribe()
  

  } 

subordinado(){

  this.empleadoService.getSubordinados().pipe(
    tap(response =>{
      this.bandera.set(true)
      this.empleados.set(response)
    })

    ).subscribe()
  

}
logout(){

  this.auhService.logout();

  this.router.navigateByUrl('/')
  
}

}
