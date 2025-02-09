import { Component, NgZone } from '@angular/core';
import { DemoSharedSupabase } from '@demo/shared';
import {} from '@nativescript/supabase';

@Component({
  selector: 'demo-supabase',
  templateUrl: 'supabase.component.html',
})
export class SupabaseComponent {
  demoShared: DemoSharedSupabase;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSupabase();
  }
}
