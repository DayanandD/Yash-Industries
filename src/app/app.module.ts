import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Sharepage/footer/footer.component';
import { NavbarComponent } from './Sharepage/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProjectsSystemsComponent } from './Pages/projects-systems/projects-systems.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ProductsComponent } from './Pages/products/products.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroductionComponent } from './Pages/about/introduction/introduction.component';
import { CompanyProfileComponent } from './Pages/about/company-profile/company-profile.component';
import { EsteemedClientsComponent } from './Pages/about/esteemed-clients/esteemed-clients.component';
import { FireHydrantSystemComponent } from './Pages/projects-systems/fire-hydrant-system/fire-hydrant-system.component';
import { PublicAddressComponent } from './Pages/projects-systems/public-address/public-address.component';
import { SignagesComponent } from './Pages/projects-systems/signages/signages.component';
import { EngineeringServicesComponent } from './Pages/services/engineering-services/engineering-services.component';
import { SystemIntegratorComponent } from './Pages/services/system-integrator/system-integrator.component';
import { AnnualMaintenanceContractComponent } from './Pages/services/annual-maintenance-contract/annual-maintenance-contract.component';
import { ReadMoreComponent } from './Pages/home/read-more/read-more.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsSystemsComponent,
    ServicesComponent,
    ProductsComponent,
    GalleryComponent,
    ContactUsComponent,
    IntroductionComponent,
    CompanyProfileComponent,
    EsteemedClientsComponent,
    FireHydrantSystemComponent,
    PublicAddressComponent,
    SignagesComponent,
    EngineeringServicesComponent,
    SystemIntegratorComponent,
    AnnualMaintenanceContractComponent,
    ReadMoreComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
