import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './Pages/home/home.component';
import{AboutComponent} from '../app/Pages/about/about.component';
import{ProjectsSystemsComponent} from '../app/Pages/projects-systems/projects-systems.component';
import{ServicesComponent} from '../app/Pages/services/services.component';
import{ProductsComponent} from '../app/Pages/products/products.component';
import{GalleryComponent} from '../app/Pages/gallery/gallery.component';
import{ContactUsComponent} from '../app/Pages/contact-us/contact-us.component';
import{CompanyProfileComponent} from './Pages/about/company-profile/company-profile.component';
import{EsteemedClientsComponent} from './Pages/about/esteemed-clients/esteemed-clients.component';
import { IntroductionComponent } from './Pages/about/introduction/introduction.component';
import{FireHydrantSystemComponent} from './Pages/projects-systems/fire-hydrant-system/fire-hydrant-system.component';
import { PublicAddressComponent } from './Pages/projects-systems/public-address/public-address.component';
import { SignagesComponent } from './Pages/projects-systems/signages/signages.component';
import { AnnualMaintenanceContractComponent } from './Pages/services/annual-maintenance-contract/annual-maintenance-contract.component';
import { SystemIntegratorComponent } from './Pages/services/system-integrator/system-integrator.component';
import { EngineeringServicesComponent } from './Pages/services/engineering-services/engineering-services.component';
import { ReadMoreComponent } from './Pages/home/read-more/read-more.component';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'About', component: AboutComponent},
{path: 'Projects', component: ProjectsSystemsComponent},
{path: 'Services' , component: ServicesComponent},
{path: 'Products', component: ProductsComponent},
{path: 'Gallery', component: GalleryComponent},
{path: 'Contact', component: ContactUsComponent},
{path:'introduction', component: IntroductionComponent},
{path:'Company', component: CompanyProfileComponent},
{path:'Esteemed', component: EsteemedClientsComponent},
{path:'signages', component: SignagesComponent},
{path:'public_address', component:PublicAddressComponent},
{path:'fh_System',component:FireHydrantSystemComponent},
{path:'AMC', component:AnnualMaintenanceContractComponent},
{path:'system', component:SystemIntegratorComponent},
{path:'eng_sys', component:EngineeringServicesComponent},
{path:'read', component:ReadMoreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
