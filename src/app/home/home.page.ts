import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  UserData:any[]=[]
  UserdataDup:any[]=[]
  searchtext:string = '';
  searchCompany:string=''
  serachdesignamtion:string=''

  constructor(private userSer:UserService)
   {
    this.GetUserDetails();
   }


  GetUserDetails(){
    this.userSer.GetUsreDetails().subscribe((res:any)=>{
      console.log(res);
      this.UserData = res;
      this.UserdataDup = res;
    },(err)=>{
      console.log(err);
    })

  }

  SearchByName(event:any){

  }



}
