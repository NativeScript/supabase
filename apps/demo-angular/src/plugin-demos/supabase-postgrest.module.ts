import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SupabasePostgrestComponent } from './supabase-postgrest.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SupabasePostgrestComponent }])],
  declarations: [SupabasePostgrestComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SupabasePostgrestModule {}
