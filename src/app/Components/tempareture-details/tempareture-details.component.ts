import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-tempareture-details',
  templateUrl: './tempareture-details.component.html',
  styleUrls: ['./tempareture-details.component.css']
})
export class TemparetureDetailsComponent implements OnInit {
  cityName: string;
  temparatureDetails:any;
  constructor(private route: ActivatedRoute, private dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(parama => {
      this.cityName = parama['name'];
      this.getTemparatureDetails(this.cityName);
      //console.log('this.cityName', this.cityName)
    })
  }
  getTemparatureDetails(name:string){
    this.dataService.getTemparatureDetails(name).subscribe(result=>{
      this.temparatureDetails = result;
      console.log(this.temparatureDetails)
    })
  }
  navigateToHome(){
    this.router.navigate(['/'])
  }

}
