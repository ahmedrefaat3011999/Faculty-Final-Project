import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { NgxPermissionsService } from "ngx-permissions";
import { UserModel } from '../user-model';
import { jwtDecode } from 'jwt-decode';
import { HttpService } from 'src/app/Services/http.service';
import { LocalStorageKeys } from 'src/app/shared/default-values';
import { environment } from 'src/environments/environment';
import { IdentityController } from '../IdentityController';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/Services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  constructor(
    private _router: Router,
    private _permissionsService: NgxPermissionsService,
    private _httpService: HttpService,
    private _notificationService: NotificationService,
    private http: HttpClient
  ) {
    this.currentUser$?.next(this.currentUser);
  }

  get currentUser(): UserModel {
    try {
      console.log("currentUser");
      console.log(localStorage.getItem(LocalStorageKeys.User));
      

      return JSON.parse(localStorage.getItem(LocalStorageKeys.User)!);
    } catch (error) {
      console.error('Error parsing token:', error);
    }
    return JSON.parse(localStorage.getItem(LocalStorageKeys.User)!);
  }

  get token(): string | null {
    return localStorage.getItem(LocalStorageKeys.AuthToken) || null;
  }

  logout(url: string): void {
    localStorage.removeItem(LocalStorageKeys.User);
    localStorage.removeItem(LocalStorageKeys.AuthToken);

    this.currentUser$.next(null);
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.navigate([url], {
      skipLocationChange: true,
      queryParamsHandling: 'merge'
    });
  }

  login(email: string, password: string, returnUrl: string = '/'): any {
    const body = {
      email: email,
      password: password
    };
    try {
      return this._httpService.POST(IdentityController.Login, body)
      .subscribe((res: string) => {
          console.log("res Token : ",  res);
          console.log("enter");
          
          this.updateToken(res);
          this._router.navigate(["/dashboard/default"])
         // this._notificationService.success("Login Success","Welcome back.")
        });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  updateToken(token: string): void {
    console.log("updateToken");
    let user = this.decodeToken(token);
    this.currentUser$.next(user);
    localStorage.setItem(LocalStorageKeys.AuthToken, token);
    localStorage.setItem(LocalStorageKeys.User, JSON.stringify(user));
    this.loadPermissions();
  }

  loadPermissions(): void {
    let roles = this.currentUser?.roles?.map(x => x?.toString()) || [];
    this._permissionsService.loadPermissions(roles);
  }

  UpdateUserInfo(firstName: string, lastName: string, phoneNumber?: string, imageUrl?: string): void {
    let currentUser = this.currentUser;

    currentUser.name = `${firstName} ${lastName}`;
    currentUser.firstName = firstName;
    currentUser.lastName = lastName;
    currentUser.phoneNumber = phoneNumber;
    currentUser.imageUrl = imageUrl;

    this.currentUser$.next(currentUser);
    localStorage.setItem(LocalStorageKeys.User, JSON.stringify(currentUser));
  }

  private decodeToken(token: string): UserModel {
    let decoded = jwtDecode(token) as any;
    return {
      id: decoded?.Id,
      firstName: decoded?.FirstName,
      lastName: decoded?.LastName,
      name: `${decoded?.FirstName} ${decoded?.LastName}`,
      imageUrl: this.imageUrl(decoded),
      email: decoded?.Email,
      status: decoded?.Status,
      phoneNumber: decoded?.PhoneNumber,
      roles: typeof decoded?.role == "string" ? [decoded?.role] : decoded?.role,
      wengazPoint:decoded.WengazPoint,
      wengazPercentage:decoded.WengazPercentage,
      Provider:decoded.Provider
    }
  }

  private imageUrl(decoded: any): string | null {
    if (!decoded?.Image_Id) return null;
    return `${environment.config?.apiConfig?.apiUrl}/api/v1/files/${decoded?.Image_Id}/download`;
  }

 
// ///////////////
//   forget(email: string): any  {
//     console.log(this._httpService.getFullUrl(IdentityController.resetnewpassword));
    
//    if (!email) return null;  
//  else
//    //return this.http.POST(this._httpService.getFullUrl(IdentityController.resetnewpassword),email).subscribe();
// return this.http.put(this._httpService.getFullUrl(IdentityController.resetnewpassword),email);
//  }

}
