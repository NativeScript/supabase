import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SupabaseFunctionsComponent } from './supabase-functions.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SupabaseFunctionsComponent }])],
  declarations: [SupabaseFunctionsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SupabaseFunctionsModule {}
