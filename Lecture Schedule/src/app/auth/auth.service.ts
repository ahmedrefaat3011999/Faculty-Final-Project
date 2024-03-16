import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { UserModel } from './models/UserModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  public currentUser$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  constructor(
    private _router: Router,
    private _HttpClient: HttpClient
  ) {
    this.currentUser$?.next(this.currentUser);
  }

  get currentUser(): UserModel {
    try {
      console.log("currentUser");

      return JSON.parse(localStorage.getItem("userData")!);
    } catch (error) {
      console.error('Error parsing token:', error);
    }
    return JSON.parse(localStorage.getItem("userData")!);
  }

  get token(): string | null {
    return localStorage.getItem("userToken") || null;
  }

  id: any;
  role: any;
  email: any;
  getUserData(token: any) {
    try {
      const decodedToken: any = jwtDecode(token);
      console.log(decodedToken);
     
      const payload = decodedToken.payload;
      console.log(token);
      // console.log({
      //   id: decodedToken?.Id,
      //   firstName: decodedToken?.FirstName,
      //   lastName: decodedToken?.LastName,
      //   email: decodedToken?.Email,
      //   status: decodedToken?.Status,
      //   phoneNumber: decodedToken?.PhoneNumber,
      //   roles: typeof decodedToken?.role == "string" ? [decodedToken?.role] : decodedToken?.role,
      //   wengazPoint:decodedToken.WengazPoint,
      //   wengazPercentage:decodedToken.WengazPercentage,
      //   Provider:decodedToken.Provider
      // });

      // Access specific properties
      this.id = decodedToken.Id;
      this.email = payload;
      this.role = decodedToken.role;
      // console.log('Email:', this.email);
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  }

  private path = environment.apiUrl;

  signIn(body: object): any{
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Cache-Control':
        'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      Pragma: 'no-cache',
      Expires: '0',
    });
    return this._HttpClient.post(this.path + '/identity/login', body, {

      headers
    }).subscribe((res)=>{ 
      this.decodeToken(res);
      
      if (this.decodeToken(res).roles[0]=='Admin') {
        this.updateToken(res);  
        this._router.navigate(['/dashboard/default'])

      }
       
    });
  }

  logOut() {
    localStorage.removeItem("userData");
    localStorage.removeItem('userToken');
    this.currentUser$.next(null);
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.navigate(['/'], {
      skipLocationChange: true,
      queryParamsHandling: 'merge'
    });
  }



  updateToken(token: any): void {
    console.log("updateToken");
    let user = this.decodeToken(token);
    this.currentUser$.next(user);
    localStorage.setItem("userToken", token);
    localStorage.setItem("userData", JSON.stringify(user));
    console.log();
    
 //   this.loadPermissions();
  }

  // loadPermissions(): void {
  //   let roles = this.currentUser?.roles?.map(x => x?.toString()) || [];
  //   this._permissionsService.loadPermissions(roles);
  // }

  UpdateUserInfo(firstName: string, lastName: string, phoneNumber?: string, imageUrl?: string): void {
    let currentUser = this.currentUser;

    currentUser.name = `${firstName} ${lastName}`;
    currentUser.firstName = firstName;
    currentUser.lastName = lastName;
    currentUser.phoneNumber = phoneNumber;
    currentUser.imageUrl = imageUrl;

    this.currentUser$.next(currentUser);
    localStorage.setItem("userData", JSON.stringify(currentUser));
  }

  private decodeToken(token: any): UserModel {
    let decoded =  jwtDecode(token) as any;
    const payload = decoded.payload;
    console.log(payload?.name);
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
    return `${environment.apiUrl}/files/${decoded?.Image_Id}/download`;
  }



}