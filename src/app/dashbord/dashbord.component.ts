import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
constructor(private service:AuthService,private http:HttpClient) {}

  ngOnInit(): void {
    this.getDashbord()
  }
 
datas:any;
  getDashbord() {
this.http.get('http://localhost:3000/posts').subscribe( res=>{
this.datas=res;
})
  }
  sub(val:number) {
    console.log(val)
  }
  Delete(id:string){
    this.service.Delete(id)
    .subscribe(
  
    )
  }
}
