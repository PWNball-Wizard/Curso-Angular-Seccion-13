import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)//! se carga el módulo AuthModule de forma lazy loading
    //!esto significa que el módulo AuthModule se cargará solo cuando se acceda a la ruta /auth y no antes
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',//! es el path por defecto cuando no se encuentra ninguno ejem: localhost:4200
    redirectTo: 'heroes',
    pathMatch: 'full'//! se usa para que la redirección sea exacta y no parcial ejem: localhost:4200/heroes
  },
  {
    path: '**',//! es el path por defecto cuando no se encuentra ninguno ejem: localhost:4200/rutaNoExiste
    redirectTo: '404',//! redirige a la página de error 404
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
