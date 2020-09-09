import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'My first AGM project';
  lat = 33.5241094;
  lng = -7.5624054;
  zoom : number = 6.5;
  latCasa = 33.5772590;
  lngCasa = -7.6374301;

  latJdida = 33.225125;
  lngJdida = -8.493200;

  // latFes = 33.259509;
  // lngFes = -8.493200;

  latTanger =  35.771855;
  lngTanger =  -5.799596;

  latSafi = 32.2894556;
  lngSafi = -9.2354677;

  latAssouira = 31.5173066;
  lngAssouira = -9.7592704;
  
  latMarrakech =  31.6337038;
  lngMarrakech = -8.0002822;

  latMaknes = 33.893907;
  lngMaknes = -5.5570826;

  latRabat = 33.9949975;
  lngRabat = -6.8669227;

  latOujda = 34.6862182;
  lngOujda = -1.912031;

  latAgadir = 30.4136524;
  lngAgadir = -9.5501002;
  

  validator: boolean = true;
  contact: Contact ={
    nom:"",
    email:"",
    message:""
  }
  contactForm = new FormGroup({
    nom:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    email:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    message:new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    });
    constructor(private _statutContact: ContactService) { }

  ngOnInit() {
  }
  //add
  addContact(){
    this._statutContact.addContact(this.contact).subscribe(res => {  
        Swal.fire({
          icon: 'success',
          title: 'Your artical was add successfully',
        })
        this.contact.nom="";
        this.contact.email="";
        this.contact.message="";
        // this.statut.financement=null; 
         this.validator = false;
        this.ngOnInit();
        
      })
      err => console.log(err)
  }

}
