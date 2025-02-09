import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SupabaseRealtimeComponent } from './supabase-realtime.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SupabaseRealtimeComponent }])],
  declarations: [SupabaseRealtimeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SupabaseRealtimeModule {}
