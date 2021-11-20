import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  { path: 'libros', loadChildren: () => import('./pages/libros/libros.module').then(m => m.LibrosModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  {path: '', redirectTo:'', pathMatch:'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'reporte', loadChildren: () => import('./pages/reporte/reporte.module').then(m => m.ReporteModule) },
  {path: '**', redirectTo:'', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
