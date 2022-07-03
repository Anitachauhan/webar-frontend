import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
// export class ProductService {

//     constructor(public http: Http) { }

//     public getProducts(dataURL:string){
//         console.log( this.http.get(dataURL)
//             .map((res:Response) =>{ res.json()})
//             .catch((error:any) => Observable.throw(error || 'Server error')));
//             return this.http.get(dataURL)
//             .map((res:Response) =>{ res.json()})
//             .catch((error:any) => Observable.throw(error || 'Server error'));
//     }
// }


export class ProductService {

  getQrCodeEndpoint : string ='http://localhost:5000/api/v1/makeQrCode';

  constructor(private http: HttpClient) {}

  public getProducts(endpoint: string) : Observable<any>{
    return this.http.get<any>(endpoint); 
   }

  public getQrCode(body: any) : Observable<any> {
    return this.http.post<any>(this.getQrCodeEndpoint, body);
  }

}
