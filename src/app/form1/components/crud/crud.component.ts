import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BsModalService} from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//import { CrudService } from '../../../Services/crud.service';

@Component({

    moduleId: module.id,
    selector: 'crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})

export class CrudComponent {

        id: any;
        public modalRef: BsModalRef;
        complexForm: FormGroup;
        UserInfo:any;
        info:any;
        information:any[];

        constructor(fb: FormBuilder,
                //private crudService: CrudService,
                private modalService: BsModalService
        ){

        this.complexForm = fb.group({
           
           'Id' :  [null,Validators.required],
           'FirstName' :  [null,Validators.required],
           'LastName' : [null,Validators.required],
           'Email' : [null,Validators.required],         

        },        
        )
        
//           this.crudService.getAll().subscribe(data => {
//             console.log(data);
//             this.info = data;
//         });
      
//     };

//     edit(tempEdit:TemplateRef<any>,model:any){
//         this.UserInfo=model;
//         this.modalRef = this.modalService.show(tempEdit);
//     }

//     submitFormForEdit(model:any)
//     {
//         this.crudService.update(model).subscribe(
//         data => {
//         // this.toasterService.showToaster('Successfully Added');
//         },   
//      );
//     }

//     delete(tempDelete:TemplateRef<any>,model:any){

//         this.UserInfo=model;
//         this.modalRef = this.modalService.show(tempDelete);
//     }

//     deleteUser(model:any)
//     {
//         this.id=model.Id
//         this.crudService.delete(this.id).subscribe(
//         data => {
//         // this.toasterService.showToaster('Successfully Added');
//             window.location.reload();
//         },    
//      );
//   }
}