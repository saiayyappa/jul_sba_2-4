import { Component } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user:any = {}
 
  getLogin(myForm:NgForm){
    console.log(myForm);
    console.log(myForm.value);
    console.log(myForm.status);
    console.log(this.user);
    // ajax req 
    this.user = {}

    // https://angular.io/api/forms/AbstractControl#!#markAsDirty-anchor
    myForm.controls.username.markAsPristine()
  }
  
}
