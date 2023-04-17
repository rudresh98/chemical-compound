import { Routes } from '@angular/router';
import { ChemicalCardComponent } from '../components/chemical-card/chemical-card.component';
import { ChemicalComponent } from '../components/chemical/chemical.component';
import { ChemicalCompoundDetailsComponent } from '../components/chemical-compound-details/chemical-compound-details.component';

const routes: Routes = [
  {
    path: '',
    component: ChemicalComponent,
  },
  {
    path: 'chemical-card',
    component: ChemicalCardComponent,
  },
  {
    path: 'chemical-card-details/:id',
    component: ChemicalCompoundDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
export default routes;
