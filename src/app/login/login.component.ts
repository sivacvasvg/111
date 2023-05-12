import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public service:AuthService,private router:Router) {}
  states=[
    {value:'Tamil Nadu'},
    {value:'Kerala'},
    {value:'Karnadaka'},
    {value:'makarastra'},
  ];
  form:FormGroup=new FormGroup({
    // name: new FormControl("",Validators.required),
    // email: new FormControl("",[Validators.required,Validators.email]),
    // password: new FormControl("",[Validators.required,]),
    // gender: new FormControl('',),
    // state: new FormControl("",)
    tittle: new FormControl("",Validators.required),
    description: new FormControl("",Validators.required),
  })
  data:any;
  sin() {
    
if(this.form.valid){
 
  this.service.register(this.form.value).subscribe( res=>{
   this.data=res;
   console
  sessionStorage.setItem('token',this.data.id)
    this.router.navigate(["dashbord"]);
  })
  
}
  }

}
