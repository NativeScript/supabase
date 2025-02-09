import { Component, NgZone } from '@angular/core';
import { DemoSharedSupabasePostgrest } from '@demo/shared';
import {} from '@nativescript/supabase-postgrest';

@Component({
  selector: 'demo-supabase-postgrest',
  templateUrl: 'supabase-postgrest.component.html',
})
export class SupabasePostgrestComponent {
  demoShared: DemoSharedSupabasePostgrest;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSupabasePostgrest();
  }
}
