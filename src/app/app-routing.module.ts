import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ResultComponent } from './result/result.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'dashbord', component:DashbordComponent,},
  { path:'edit/:id',component:EditComponent},
  { path:'', component:DashbordComponent}
  // { path:'',component:AppComponent},
  // { path:'list',component:ListComponent},
  // { path:'result',component:ResultComponent},
  // { path:'**',redirectTo:'list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
