// import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';


// @Injectable()
// export class CrudService {
//     constructor(private http: Http) { }

//     getAll() {
//         return this.http.get('http://localhost:56523/api/Students/',this.jwt()).map((response: Response) => response.json());
//     }

//     create(model:any) {
//             return this.http.post('http://localhost:56523/api/Students/',model,this.jwt()).map((response: Response) => response.json());
//         }

//     update(model:any) {
//         return this.http.put('http://localhost:56523/api/Students/', model, this.jwt()).map((response: Response) => response.json());
//     }

//     delete(id:any) {
//         return this.http.delete('http://localhost:56523/api/Students/'+id, this.jwt()).map((response: Response) => response.json());
//     }


//     private jwt() {
//         // create authorization header with jwt token
//         let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//         if (currentUser && currentUser.token) {
//             let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
//             return new RequestOptions({ headers: headers });
//         }
//     }
// }