import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  access_token: any;
  refresh_token: any;
  data : any;
  
  userdata : any;
  headers : HttpHeaders = new HttpHeaders({'Authorization': `Bearer ${this.access_token}`});
  

  constructor(private http : HttpClient) {  }

  getNewToken =  () => {
    this.http.get('http://localhost:8888/refresh_token', {params: {refresh_token: this.refresh_token}}).subscribe(data => {
     
      this.data = data;
    })
    this.access_token = this.data.access_token;
  }
   
   hae = async () : Promise<any> => {
     return this.http.get('https://api.spotify.com/v1/me', {headers:{'Authorization' : 'Bearer ' + this.access_token}}).subscribe((data : any) => {
      this.userdata = data;

    })
   }

   play =  () : void => {
  
    this.http.put('https://api.spotify.com/v1/me/player/play', null, {headers:{'Authorization' : 'Bearer ' + this.access_token}}).subscribe((data : any) => {
    

   })
  }

  pause =  () : void => {
    this.http.put('https://api.spotify.com/v1/me/player/pause', null, {headers:{'Authorization' : 'Bearer ' + this.access_token}}).subscribe((data : any) => {
     console.log(data);

   })
  }

  next =  () : void => {
    this.http.post('https://api.spotify.com/v1/me/player/next', null, {headers:{'Authorization' : 'Bearer ' + this.access_token}}).subscribe((data : any) => {
     console.log(data);

   })
  }

  back =  () : void => {
    this.http.post('https://api.spotify.com/v1/me/player/previous', null, {headers:{'Authorization' : 'Bearer ' + this.access_token}}).subscribe((data : any) => {
     console.log(data);

   })
  }

  }

