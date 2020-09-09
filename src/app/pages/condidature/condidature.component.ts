import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as AOS from 'aos';

@Component({
  selector: 'app-condidature',
  templateUrl: './condidature.component.html',
  styleUrls: ['./condidature.component.css']
})
export class CondidatureComponent implements OnInit {
  statutStatut:boolean=false;
  statutStatut2:boolean=false;
  constructor() { }

  ngOnInit() {
    AOS.init();
  }
  add(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
