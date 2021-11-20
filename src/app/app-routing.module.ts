import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  { path: 'libros', loadChildren: () => import('./pages/libros/libros.module').then(m => m.LibrosModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  {path: '', redirectTo:'', pathMatch:'full' },
  {path: '**', redirectTo:'', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
