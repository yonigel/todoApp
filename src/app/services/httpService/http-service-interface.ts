import { Observable } from "rxjs";

export interface HttpServiceInterface {

    get(url: string): Observable<any>
    
}
