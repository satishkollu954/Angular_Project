import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'; // Update the path

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit {
  showProfile: boolean = false;
  editing: boolean = false;
  profile: any = { name: '', email: '', mobile: '' }; // Initialize profile to avoid undefined

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.profile = this.profileService.getProfile() || this.profile; // Use default profile if not retrieved
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  saveProfile() {
    if (this.profile) {
      this.profileService.updateProfile(this.profile);
      this.toggleEdit(); // Exit editing mode after saving
    }
  }
}
