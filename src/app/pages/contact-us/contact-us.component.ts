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
      phone: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      // Add more form controls as needed
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      const formData = this.form.value;

      this.fetchData(formData);
    }
  }

  fetchData(formData: any) {
    // Replace 'your-api-endpoint' with the actual API endpoint
    const apiUrl = 'https://clientapi.gabeshub.com/lawyer/sendmail.php';

    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        this.form.reset();
        alert('Message sent successfully');
      },
      (error) => {
        console.error('Error submitting form:', error);
        if (error.error.text == 'Message sent') {
          this.form.reset();
          alert('Message sent successfully');
        } else {
          alert('Message sending failed');
        }
      }
    );
  }
}
