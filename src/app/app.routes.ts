import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'newApplication',
        pathMatch: 'full'
    },
    {
        path: 'newApplication',
        component: LoanApplicationComponent
    },
    {
        path: 'applicationList',
        component: ApplicationListComponent
    }
];
