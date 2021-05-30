import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
character;
  profielId:string;
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
  this.profielId = this.activatedRoute.snapshot.paramMap.get('id');
  this.http.get('https://rickandmortyapi.com/api/character/' + this.profielId)
  .subscribe(res =>{
    console.log(res)
    this.character = res;
  })
  }

}
