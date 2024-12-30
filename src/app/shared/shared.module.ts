import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailPageComponent } from './componentes/card-detail-page/card-detail-page.component';

// ANGULAR MATERIAL
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './componentes/table/table.component';

// PRIME NG
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    CardDetailPageComponent,
    TableComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    // MATERIAL
    MatCardModule,
    // PRIMENG
    TableModule,
    PaginatorModule,
  ],
  exports: [
    CardDetailPageComponent,
    TableComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
