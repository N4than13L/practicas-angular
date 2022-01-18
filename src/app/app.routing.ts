import { ModuleWithProviders,  } from "@angular/core"
import { Routes, RouterModule} from '@angular/router'


import { HomeComponent} from "./home/home.component"
import { MotosComponent } from "./motos/motos.component"
import { ContactComponent } from "./contact/contact.component"


const appProviders: Routes = [
     {path: 'home', component: HomeComponent},
     {path: 'motos', component: MotosComponent},
     {path: 'contacto', component: ContactComponent},
     {path: '**', component: HomeComponent}
]

export const _modulesWithProviders: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appProviders)