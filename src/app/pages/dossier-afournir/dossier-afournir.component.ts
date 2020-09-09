import { Component,  OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'; 

@Component({
  selector: 'app-dossier-afournir',
  templateUrl: './dossier-afournir.component.html',
  styleUrls: ['./dossier-afournir.component.css']
})
export class DossierAfournirComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { } 


  ngOnInit() {
  }
}
