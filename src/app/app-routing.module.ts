import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',

    },
    { path: 'crud', loadChildren: './crud/crud.module#CrudModule' },
    { path: 'form', loadChildren: './form/form.module#FormModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }