import { Component, OnInit  } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user!: SocialUser;
  
  constructor(
    private socialAuthService: SocialAuthService
  ) { }
  ngOnInit() {
      
    
    this.socialAuthService.authState.subscribe((user) => {
      
      console.log(this.user);
    });
  }

  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
