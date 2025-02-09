import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SupabaseGotrueComponent } from './supabase-gotrue.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SupabaseGotrueComponent }])],
  declarations: [SupabaseGotrueComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SupabaseGotrueModule {}
