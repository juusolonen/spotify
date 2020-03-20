import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  
  constructor(private route: ActivatedRoute, private router: Router, public spotify: SpotifyService) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParams => {
      this.spotify.access_token = queryParams.get("access_token");  
      this.spotify.refresh_token = queryParams.get("refresh_token");  
    
      if(this.spotify.access_token && this.spotify.refresh_token) {
        this.spotify.hae().then(()=> {
          this.router.navigate(['user', this.spotify.access_token, this.spotify.refresh_token])
        });

      }

  })


}


}
