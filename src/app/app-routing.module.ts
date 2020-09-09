import { SeConnecterComponent } from './pages/se-connecter/se-connecter.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavBarComponent } from './componenets/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { CondidatureComponent } from './pages/condidature/condidature.component';


const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServicesComponent },
  // { path: 'service', component: CondidatureComponent },
  { path: 'carries', component: CondidatureComponent },
  { path: 'login', component: SeConnecterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
