import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpListComponent } from './empDetails/emp-list/emp-list.component';
import { EmpAddComponent } from './empDetails/emp-add/emp-add.component';
import { EmpUpdateComponent } from './empDetails/emp-update/emp-update.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'',
    component: HeaderComponent,
  },
  {
    path: 'listEmp',
    component: EmpListComponent,
  },
  {
    path: 'addEmp',
    component: EmpAddComponent,
  },
  {
    path: 'editEmp',
    component: EmpUpdateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
