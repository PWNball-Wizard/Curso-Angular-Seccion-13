import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    //!Children es un array de rutas secundarias que se pueden anidar en la ruta principal de este módulo
    //!Esto significa que las rutas secundarias se agregarán a la ruta principal de este módulo y se mostrarán en la misma página que la ruta principal
    //!!Una ruta hija es una ruta que se anida dentro de otra ruta ejem: /rutaPrincipal/rutaHija
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'new-account',
        component: RegisterPageComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
