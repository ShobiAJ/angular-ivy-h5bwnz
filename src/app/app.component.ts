import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  countryNames = [
    {country:'India'}, {country:'Japan'}, {country:'China'},{country:'UAE'}
  ]

  education = [{name : "SSLC", id: 1}, {name : "MBA", id: 2},{name :  "HSC", id: 3}]

  onSubmit(value) {
    console.log('hi');
    console.log(value);
  }

  onReset(form: NgForm) {
    form.reset()
  }
}
