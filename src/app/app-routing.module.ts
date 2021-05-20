import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CompanyDataComponent } from './modules/company-data/company-data.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UsersComponent } from './modules/users/users.component';
import { AddUserComponent } from './modules/users/add/add.component';
import { LoginComponent } from './modules/login/login.component';
import { AddCompanyComponent } from './modules/company-data/add/add.component';
import { CategoryComponent } from './modules/teachers/category/category.component';
import { AreaTComponent } from './modules/teachers/area/area.component';
import { PlaceComponent } from './modules/teachers/place/place.component';
import { PlaceAddComponent } from './modules/teachers/place/add/add.component';
import { CategoryAddComponent } from './modules/teachers/category/add/add.component';
import { AreaAddComponent } from './modules/teachers/area/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'company-data', component: CompanyDataComponent },
      { path: 'add-emo', component: AddCompanyComponent },
      { path: 'login', component: LoginComponent },
      { path: 'teachers/category', component: CategoryComponent },
      { path: 'teachers/area', component: AreaTComponent },
      { path: 'teachers/place', component: PlaceComponent },
      { path: 'teachers/place-add', component: PlaceAddComponent },
      { path: 'teachers/category-add', component: CategoryAddComponent },
      { path: 'teachers/area-add', component: AreaAddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
