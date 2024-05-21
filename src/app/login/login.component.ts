import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false; // Flag to track invalid login attempts

  // Dummy data for login validation
  dummyUserData = {
    username: 'user123',
    password: 'password123'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.invalidLogin = false; // Reset invalid login status

    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    
    // Check if username and password match the dummy data
    if (username === this.dummyUserData.username && password === this.dummyUserData.password) {
      // Perform the login action, e.g., make an API call
      console.log('Form submitted:', { username, password });

      // Navigate to 'task-list' route after successful login
      this.router.navigate(['/task-list']);
    } else {
      // Set invalidLogin flag to display error message
      this.invalidLogin = true;
    }
  }
}
