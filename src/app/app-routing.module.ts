import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharsPageComponent } from './pages/shars-page/shars-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    title: 'LoginPage',
  }, {
    path: 'home',
    component: HomePageComponent,
    title: 'HomePage',
    children: [
      {
        path: '',
        component: DashBoardComponent,
        title: 'SharesPage',
      },{
      path: 'share',
      component: SharsPageComponent,
      title: 'SharesPage',
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
