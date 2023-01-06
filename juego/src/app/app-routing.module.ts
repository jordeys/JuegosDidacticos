import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Juego11Component } from './componentes/Nivel1/juego1.1/juego1.1.component';
import { Juego110Component } from './componentes/Nivel1/juego1.10/juego1.10.component';
import { Juego12Component } from './componentes/Nivel1/juego1.2/juego1.2.component';
import { Juego13Component } from './componentes/Nivel1/juego1.3/juego1.3.component';
import { Juego14Component } from './componentes/Nivel1/juego1.4/juego1.4.component';
import { Juego15Component } from './componentes/Nivel1/juego1.5/juego1.5.component';
import { Juego16Component } from './componentes/Nivel1/juego1.6/juego1.6.component';
import { Juego17Component } from './componentes/Nivel1/juego1.7/juego1.7.component';
import { Juego18Component } from './componentes/Nivel1/juego1.8/juego1.8.component';
import { Juego19Component } from './componentes/Nivel1/juego1.9/juego1.9.component';
import { Juego21Component } from './componentes/Nivel2/juego2.1/juego2.1.component';
import { Juego22Component } from './componentes/Nivel2/juego2.2/juego2.2.component';
import { Juego23Component } from './componentes/Nivel2/juego2.3/juego2.3.component';
import { Juego24Component } from './componentes/Nivel2/juego2.4/juego2.4.component';
import { Juego25Component } from './componentes/Nivel2/juego2.5/juego2.5.component';
import { PaginaprincipalComponent } from './componentes/Principal/paginaprincipal/paginaprincipal.component';

const routes: Routes = [
  {
    path: 'principal', component:PaginaprincipalComponent
  },

  {
    path: 'Juego11', component:Juego11Component
  },

  {
    path: 'pJuego12', component:Juego12Component
  },

  { 
    path: 'Juego13', component:Juego13Component
  },

  {
    path: 'Juego14', component:Juego14Component
  },
  
  {
    path: 'Juego15', component:Juego15Component
  },
    
  {
    path: 'Juego16', component:Juego16Component
  },
    
  {
    path: 'Juego17', component:Juego17Component
  },
    
  {
    path: 'Juego18', component:Juego18Component
  },
    
  {
    path: 'Juego19', component:Juego19Component
  },
    
  {
    path: 'Juego110', component:Juego110Component
  },
    
  {
    path: 'Juego21', component:Juego21Component
  },
    
  {
    path: 'Juego22', component:Juego22Component
  },
    
  {
    path: 'Juego23', component:Juego23Component
  },
    
  {
    path: 'Juego24', component:Juego24Component
  },
    
  {
    path: 'Juego25', component:Juego25Component
  },
    
  {
    path: 'Juego26', component:Juego15Component
  },
    
  {
    path: 'Juego27', component:Juego15Component
  },
    
  {
    path: 'Juego28', component:Juego15Component
  },
    
  {
    path: 'Juego29', component:Juego15Component
  },
    
  {
    path: 'Juego210', component:Juego15Component
  },
    
  {
    path: 'Juego31', component:Juego15Component
  },
    
  {
    path: 'Juego32', component:Juego15Component
  },
  
  {
    path: 'Juego33', component:Juego15Component
  },  
  {
    path: 'Juego34', component:Juego15Component
  },  
  {
    path: 'Juego35', component:Juego15Component
  },  
  {
    path: 'Juego36', component:Juego15Component
  },  
  {
    path: 'Juego37', component:Juego15Component
  },  
  {
    path: 'Juego38', component:Juego15Component
  },  
  {
    path: 'Juego39', component:Juego15Component
  },  
  {
    path: 'Juego310', component:Juego15Component
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
