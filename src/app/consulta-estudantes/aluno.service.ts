import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from './estudante';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  URL = 'https://modelo-projeto-express-2.brunoggomes.repl.co';

  constructor(private http: HttpClient) {}

  obterEstudantes() {}

  obterEstudante(mat: number): Observable<Estudante> {
    return this.http.get<Estudante>(``);
  }
}
