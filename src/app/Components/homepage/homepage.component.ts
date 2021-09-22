import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';
import { Temparature } from './temparature.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cityTemparetureObj:Temparature[];
  constructor(private dataService:DataService,private route:Router) { }

  ngOnInit() {
    this.dataService.fetchTemparature().subscribe(res=>{
      this.cityTemparetureObj = res;
      console.log('this.cityTemparetureObj',this.cityTemparetureObj)
    }, err => {
      err = 'Error while fetching the good receipt or po details or po history';
      console.log(err)
    })
  }
  gotToDetails(name){
    this.route.navigate(['tempDetails',name])
  }

}
