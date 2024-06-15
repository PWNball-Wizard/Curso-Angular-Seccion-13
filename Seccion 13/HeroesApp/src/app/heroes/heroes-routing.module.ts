import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    //!Children es un array de rutas secundarias que se pueden anidar en la ruta principal de este módulo
    //!Esto significa que las rutas secundarias se agregarán a la ruta principal de este módulo y se mostrarán en la misma página que la ruta principal
    //!!Una ruta hija es una ruta que se anida dentro de otra ruta ejem: /rutaPrincipal/rutaHija
    children: [
      {
        path: 'new-hero',
        component: NewPageComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: 'edit/:id',
        component: NewPageComponent
      },
      {
        path: 'list',
        component: ListPageComponent
      },
      {
        path: ':id',//!id es un parámetro de ruta que se puede usar para identificar un héroe específico 
        //!se coloca asi para que angular sepa que es un parámetro de ruta y no una ruta, y solo se colocan los dos puntos
        //!porque es un parámetro de ruta y no una ruta en si ejem: /heroes/1
        //!Importa en donde se coloque esta ruta, ya que si se coloca al inicio, todas las rutas que se coloquen despues de esta no se podran acceder
        //!ya que angular pensara que es un id y no una ruta 
        component: HeroPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
