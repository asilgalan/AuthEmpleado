import { inject } from "@angular/core";
import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "../services/auth.service";




export const AuthenticatedGuard: CanMatchFn = async (
  route:Route,
  segments:UrlSegment[]
)=>{
  const authService=inject(AuthService)
  const router=inject(Router)

  const isAuthenticated=authService.token()

  if(!isAuthenticated){
    router.navigateByUrl('/login');
    return false;
  }

  return true;

}