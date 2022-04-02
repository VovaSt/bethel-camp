import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
    private apiKey = environment.youtube.APIKey;
    private channelId = environment.youtube.channelId;

    constructor(public http: HttpClient) { }

    getVideosForChanel(count: number): Observable<Object> {
        let url = this.getListUrl(count);
        return this.http.get(url);
    }

    getLastVideo(): Observable<Object> {
        let url = this.getListUrl(1);
        return this.http.get(url);
    }

    private getListUrl(count: number) {
        return `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}&order=date&part=snippet&type=video,id&maxResults=${count}`;
    }
}