import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { CrudService } from "../../services/crud.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
      
      moduleId: module.id,
      selector: 'add',
      templateUrl: './modal.component.html',
})

export class AddmodelComponent{
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

//   submitForm(model:any){
//         this.crudService.create(model).subscribe(
//         data => {
//         // this.toasterService.showToaster('Successfully Added');
//         window.location.reload();
//         },     
//      );
//   }
}