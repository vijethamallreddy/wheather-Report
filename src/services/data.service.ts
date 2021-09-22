import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin } from "rxjs";
import { Temparature } from "../app/Components/homepage/temparature.model"

@Injectable({providedIn:'root'})
export class DataService{
    constructor(private http:HttpClient){}
    fetchTemparature(){
        const response1 = this.http.get<Temparature>("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517");
        const response2 = this.http.get<Temparature>("http://api.openweathermap.org/data/2.5/weather?q=glasgow,uk&appid=3d8b309701a13f65b660fa2c64cdc517");
        const response3 = this.http.get<Temparature>("http://api.openweathermap.org/data/2.5/weather?q=bristol,uk&appid=3d8b309701a13f65b660fa2c64cdc517");
        const response4 = this.http.get<Temparature>("http://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&appid=3d8b309701a13f65b660fa2c64cdc517");
        const response5 = this.http.get<Temparature>("http://api.openweathermap.org/data/2.5/weather?q=cambridge,uk&appid=3d8b309701a13f65b660fa2c64cdc517");
        return forkJoin([response1,response2,response3,response4,response5])
    }
    getTemparatureDetails(cityName:string){
        return this.http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+"&cnt=5&appid=3d8b309701a13f65b660fa2c64cdc517");
    }

}