import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  faBackward = faBackward;
  faForward = faForward;
  faPlay = faPlay;
  faPause = faPause;
 
  constructor(private route : ActivatedRoute, private router : Router, public spotify: SpotifyService) {

   }

  ngOnInit() {


   }



}