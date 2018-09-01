import { Observable } from "rxjs";

export interface HttpServiceInterface {

    get(url: string): Observable<any>;
    post(url: string, body: Object): Observable<any>;
    put(url: string, body: Object): Observable<any>;
    delete(url: string, body: Object): Observable<any>;
    
}
