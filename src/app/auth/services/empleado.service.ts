import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { Empleado } from '../../interface/empleado.dto';

@Injectable({providedIn: 'root'})
export class EmpleadoService {
    private http=inject(HttpClient)
    private baseUrl=environment.baseurl;


    getEmpleados():Observable<Empleado>{
        return this.http.get<Empleado>(this.baseUrl+"api/Empleados/PerfilEmpleado").pipe(
            tap((response) => console.log(response)
            )
        );
    }
    getSubordinados():Observable<Empleado[]>{
        return this.http.get<Empleado[]>(this.baseUrl+"api/empleados/Subordinados").pipe(
            tap((response) => console.log(response)
            )
        );
    }




    
}