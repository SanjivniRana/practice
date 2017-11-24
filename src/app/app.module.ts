import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { CrudService } from './Services/crud.service';
import { AddmodelComponent } from './form1/modal/modal.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormComponent } from './form2/components/form/form.component';
import { LayoutComponent } from './layout/layout.component';
import { CrudComponent } from './form1/components/crud/crud.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    AddmodelComponent,
    HeaderComponent,
    SidebarComponent,
    FormComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
   ReactiveFormsModule,
   AppRoutingModule,
   
  ],
  providers: [ CrudService,
    BsModalService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
