import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'zone-less', pathMatch: 'full' },
  { path: 'zone-less', loadComponent: () => import('./zone-less/zone-less.component').then(m => m.ZoneLessComponent) },
  { path: 'deferrable-views', loadComponent: () => import('./deferrable-views/deferrable-views.component').then(m => m.DeferrableViewsComponent) },
  { path: 'signal-api', loadComponent: () => import('./signal-api/signal-api.component').then(m => m.SignalApiComponent) },
  { path: 'control-flow', loadComponent: () => import('./control-flow/control-flow.component').then(m => m.ControlFlowComponent) },
];
