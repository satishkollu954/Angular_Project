import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Default profile data
  profile: {
    name: string;
    email: string;
    mobile: string;
  } = {
    name: 'user123',
    email: 'user123@email.com',
    mobile: '1234567890'
  };

  constructor() { }

  /**
   * Update profile with new data.
   * @param newProfile New profile data to update
   */
  updateProfile(newProfile: Partial<{
    name: string;
    email: string;
    mobile: string;
  }>) {
    // Merge new profile data with existing profile using spread operator
    this.profile = { ...this.profile, ...newProfile };
  }

  /**
   * Get the current profile data.
   * @returns Current profile data
   */
  getProfile(): {
    name: string;
    email: string;
    mobile: string;
  } {
    return this.profile;
  }
}
