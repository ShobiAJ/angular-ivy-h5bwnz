import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countryNames = [
    { country: 'India' },
    { country: 'Japan' },
    { country: 'China' },
    { country: 'UAE' },
  ];

  education = [
    { name: 'SSLC', id: 1 },
    { name: 'MBA', id: 2 },
    { name: 'HSC', id: 3 },
  ];

  onSubmit(form) {
    console.log(form);
    if (form.valid) {
      alert('Submitted!');
    } else {
      alert('Invalif form!');
    }
    this.onReset(form);
  }

  onReset(form: NgForm) {
    form.reset();
  }
}
