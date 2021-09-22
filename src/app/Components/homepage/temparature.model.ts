export interface Temparature{
    name:string;
    wind?:TemparatureObj;
    sys?:SunObj;
    main?:MainObj;
}
export interface SunObj{
     sunrise?:string;
     sunset?:string;
}
export interface TemparatureObj{
    deg?:number;
}
export interface MainObj{
    temp?:string;
}
