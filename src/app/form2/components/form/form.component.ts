import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
//import { CrudService } from '../../../Services/crud.service';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

        complexForm: FormGroup;
        public modalRef: BsModalRef;
        constructor(fb: FormBuilder,
                  //private crudService: CrudService,
                  private modalService: BsModalService
      ){
      this.complexForm = fb.group({
  
            'FirstName' :  [null,Validators.required],
            'LastName' : [null,Validators.required],
            'Email': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
          },          
          )  
      }
  
      public openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  
    // submitForm(model:any){
    //       this.crudService.create(model).subscribe(
    //       data => {
    //       // this.toasterService.showToaster('Successfully Added');
    //       window.location.reload();
    //       },     
    //    );
    // }
  }
