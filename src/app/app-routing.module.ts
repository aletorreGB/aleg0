import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ub-picks',
    loadChildren: () => import('./ub-picks/ub-picks.module').then( m => m.UbPICKSPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    children: [
      {
        path:"",
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)

      },
      {
        path: ":pickId",
        loadChildren: ()=> import('./inicio/detalle/detalle.module').then(m =>m.DetallePageModule)

      }

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
