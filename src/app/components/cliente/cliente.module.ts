import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './form/cliente-form.component';
import { ClienteListComponent } from './list/cliente-list.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteFormComponent, ClienteListComponent]
})
export class ClienteModule { }

