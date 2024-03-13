import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  loadChildren: () => import('./list-users/list-users.module').then(m => m.ListUsersModule)
}, {
  path: 'add-user',
  component: UsersComponent,
  loadChildren: () => import('./add-users/add-users.module').then(m => m.AddUsersModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
