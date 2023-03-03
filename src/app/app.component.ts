import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name: string = '';
  public genre: string = '';

  dataTable: any = [];
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
    console.log(form.value);
    if (form.valid) {
      let formData = {
        fname: form.value.firstname,
        lname: form.value.lastName,
        email: form.value.email,
        country: form.value.country,
      };
      this.dataTable.push(formData);
      alert('Submitted!');
      this.onReset(form);
    } else {
      alert('Invalid form!');
    }
  }

  onReset(form: NgForm) {
    form.reset();
  }

  onDelete(index) {
    this.dataTable.splice(index, 1);
  }
}
