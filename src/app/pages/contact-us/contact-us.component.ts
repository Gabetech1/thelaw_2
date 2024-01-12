import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more form controls as needed
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      const formData = this.form.value;

      // this.submitFormData(formData);
    }
  }

  private submitFormData(formData: any) {
    // Replace 'your-api-endpoint' with the actual API endpoint
    const apiUrl = 'your-api-endpoint';

    /*  this.http.post(apiUrl, formData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
      },
      (error) => {
        console.error('Error submitting form:', error);
      }
    ); */
  }
}
