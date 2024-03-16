import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UntypedFormControl, UntypedFormGroup ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

previousUrl: string = '/';

loginform:UntypedFormGroup=new UntypedFormGroup({
  email: new UntypedFormControl('', [Validators.required, Validators.email]),
  password: new UntypedFormControl('', [Validators.required]),
});

get emailcontrol(){
  return this.loginform.controls['email'];
}
get passwordcontrol(){
  return this.loginform.controls['password'];
}
showPassword: boolean = false;
visibal:string="password"
togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
  if (!this.showPassword) {
    this.visibal="password"
  }
   
    else{ this.visibal="text"}
}

constructor(private router: Router, private _AuthService: AuthService, private route: ActivatedRoute) { }

ngOnInit(): void {
  this.previousUrl = this.route.snapshot.paramMap.get('previousUrl') ?? this.previousUrl;

  }
    
login() {

  console.log(this.loginform.value);
  
  if (this.loginform.valid) {
    const body = {
      email: this.loginform.value.email,
      password: this.loginform.value.password
    };

    this._AuthService.signIn(body).subscribe({
      next:(res)=>{
        console.log("res", res);

      },
    })
  }
}
}
