import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SupabaseStorageComponent } from './supabase-storage.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SupabaseStorageComponent }])],
  declarations: [SupabaseStorageComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SupabaseStorageModule {}
