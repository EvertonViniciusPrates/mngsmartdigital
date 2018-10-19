import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent} from './form/cliente-form.component';
import { ClienteListComponent } from './list/cliente-list.component';

const routes: Routes = [
  {
    path: 'create', component: ClienteFormComponent
  },
  {
    path: 'list', component: ClienteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
