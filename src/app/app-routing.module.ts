import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
const routes: Routes = [
  {
    path: '',  component: IndexComponent
  },
  {
    path: 'cliente', loadChildren: './components/cliente/cliente.module#ClienteModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
