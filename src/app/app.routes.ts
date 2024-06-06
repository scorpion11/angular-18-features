import {Routes} from '@angular/router';
import {ErrorHandler, inject} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'zone-less',
    loadComponent: () => import('./zone-less/zone-less.component').then(m => m.ZoneLessComponent)
  },
  {
    path: 'deferrable-views',
    loadComponent: () => import('./deferrable-views/deferrable-views.component').then(m => m.DeferrableViewsComponent)
  },
  {
    path: 'signal-api',
    loadComponent: () => import('./signal-api/signal-api.component').then(m => m.SignalApiComponent)
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./control-flow/control-flow.component').then(m => m.ControlFlowComponent)
  },
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
  },
  {
    path: 'user-dashboard',
    loadComponent: () => import('./user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent)
  },
  {
    path: 'error-page',
    loadComponent: () => import('./error-page/error-page.component').then(m => m.ErrorPageComponent)
  },
  {
    path: 'route-redirects',
    redirectTo: ({queryParams}) => {
      const isAdmin = queryParams['admin'];

      if (isAdmin === 'true') {
        return '/admin-dashboard';
      } else if (isAdmin === 'false') {
        return '/user-dashboard';
      } else {
        inject(ErrorHandler).handleError(new Error('Attempted navigation to route redirects without specifying admin status'));
        return `/error-page`;
      }
    }
  }
];
