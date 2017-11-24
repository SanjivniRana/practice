import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, //required for ngForm
        ReactiveFormsModule,
        HttpModule,
        FormRoutingModule
    ],
    declarations: [FormComponent]
})
export class CrudModule {
}