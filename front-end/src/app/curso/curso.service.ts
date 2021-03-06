import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

    private server = environment.apiServer
    private apiUri = this.server + 'curso'
    
    constructor(private http : HttpClient) { }

    listar(){
        return this.http.get(this.server + 'curso').toPromise()
    }

    excluir(id : string) {
        return this.http.request('DELETE', this.server + 'curso', {body: {_id: id}}).toPromise()
    }

    novo(body : any) {
        return this.http.post(this.apiUri, body).toPromise()
    }

    obterUm(id: string) {
    return this.http.get(this.apiUri + '/' + id).toPromise()
  }

    atualizar(body : any) {
    return this.http.put(this.apiUri, body).toPromise()
  }

}
