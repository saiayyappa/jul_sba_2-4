import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name:'capitalize'})
export class CapitalizePipe implements PipeTransform{
    transform(input:string, num:number){
        console.log("input is "+input)
        var capitalizedName = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        if(!!num){
            return capitalizedName.slice(0,num);
        } else {
            return capitalizedName;
        }
    }
}