import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SupabaseComponent } from './supabase.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SupabaseComponent }])],
  declarations: [SupabaseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SupabaseModule {}
