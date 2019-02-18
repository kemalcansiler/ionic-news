import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {tap} from 'rxjs/operators';

const apikey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey', apikey);

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(private http: HttpClient,
                private loadingService: LoadingService) {
    }

    getData(url) {
        this.loadingService.present();
        return this.http.get(`${apiUrl}/${url}`, {params}).pipe(tap(
            () => this.loadingService.dismiss()));
    }
}
