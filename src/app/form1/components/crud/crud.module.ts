import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, //required for ngForm
        ReactiveFormsModule,
        HttpModule,
        CrudRoutingModule
    ],
    declarations: [CrudComponent]
})
export class CrudModule {
}