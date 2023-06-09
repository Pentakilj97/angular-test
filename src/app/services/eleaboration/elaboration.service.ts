import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElaborationService {

  constructor() { }

  fromStringToArrayOfNumbers(input:string){

    let array:number[]=[]

    const splittedString= input.split(' ');
    for (let i = 0; i < splittedString.length; i++) {
      const element = splittedString[i];
      const number=Number(element);
      if (!isNaN(number)) {
        array.push(number)

      }

    }
    return array

  }
}
