import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'supabase', loadChildren: () => import('./plugin-demos/supabase.module').then((m) => m.SupabaseModule) },
  { path: 'supabase-functions', loadChildren: () => import('./plugin-demos/supabase-functions.module').then((m) => m.SupabaseFunctionsModule) },
  { path: 'supabase-gotrue', loadChildren: () => import('./plugin-demos/supabase-gotrue.module').then((m) => m.SupabaseGotrueModule) },
  { path: 'supabase-postgrest', loadChildren: () => import('./plugin-demos/supabase-postgrest.module').then((m) => m.SupabasePostgrestModule) },
  { path: 'supabase-realtime', loadChildren: () => import('./plugin-demos/supabase-realtime.module').then((m) => m.SupabaseRealtimeModule) },
  { path: 'supabase-storage', loadChildren: () => import('./plugin-demos/supabase-storage.module').then((m) => m.SupabaseStorageModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
