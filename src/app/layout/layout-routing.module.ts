import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CrudComponent } from '../form1/components/crud/crud.component';
import { FormComponent } from '../form2/components/form/form.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }