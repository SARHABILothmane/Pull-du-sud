import { SeConnecterComponent } from './pages/se-connecter/se-connecter.component';
import { DossierAfournirComponent } from './pages/dossier-afournir/dossier-afournir.component';
import { EntrepriseComponent } from './componenets/entreprise/entreprise.component';
import { TopRouteComponent } from './componenets/top-route/top-route.component';
import { SlidePartneraitComponent } from './componenets/slide-partnerait/slide-partnerait.component';
import { CarouselComponent } from './componenets/carousel/carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { InfoComponent } from './componenets/info/info.component';
import { NavBarComponent } from './componenets/nav-bar/nav-bar.component';
import { SectionAboutComponent } from './componenets/section-about/section-about.component';
import { NosValeurComponent } from './componenets/nos-valeur/nos-valeur.component';
import { TeamComponent } from './componenets/team/team.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { CounterComponent } from './componenets/counter/counter.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ValeurComponent } from './componenets/valeur/valeur.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { SectionServiceComponent } from './componenets/section-service/section-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCondidatureComponent } from './componenets/form-condidature/form-condidature.component';
import { CondidatureComponent } from './pages/condidature/condidature.component';
import { ButtonAboutComponent } from './componenets/button-about/button-about.component';
import { SearchTrakingComponent } from './componenets/search-traking/search-traking.component';
import { ServicehomeComponent } from './componenets/servicehome/servicehome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    InfoComponent,
    NavBarComponent,
    SectionAboutComponent,
    NosValeurComponent,
    TeamComponent,
    FooterComponent,
    CounterComponent,
    AcceuilComponent,
    AproposComponent,
    SlidePartneraitComponent,
    ValeurComponent,
    TopRouteComponent,
    ContactComponent,
    EntrepriseComponent,
    ServicesComponent,
    SectionServiceComponent,
    FormCondidatureComponent,
    CondidatureComponent,
    DossierAfournirComponent,
    ButtonAboutComponent,
    SeConnecterComponent,
    SearchTrakingComponent,
    ServicehomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACt-wjKOReHDNReQomsXhoaal9AklY5aM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
