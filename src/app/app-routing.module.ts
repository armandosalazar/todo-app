import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HomeChildOneComponent} from "./home-child-one/home-child-one.component";
import {HomeChildTwoComponent} from "./home-child-two/home-child-two.component";
import {ValidateSessionGuard} from "@core/guards/validate-session.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'one',
        component: HomeChildOneComponent
      }, {
        path: 'two',
        component: HomeChildTwoComponent
      }
    ]
  },
  {
    path: 'auth', // TODO: http://localhost:4200/auth && public
    loadChildren: () => import('@modules/auth/auth.module').then((module) => module.AuthModule)
  },
  {
    path: 'task', // TODO: http://localhost:4200/task && private
    loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule),
    canActivate: [ValidateSessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
