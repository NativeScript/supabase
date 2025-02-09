import { Component, NgZone } from '@angular/core';
import { DemoSharedSupabaseRealtime } from '@demo/shared';
import {} from '@nativescript/supabase-realtime';

@Component({
  selector: 'demo-supabase-realtime',
  templateUrl: 'supabase-realtime.component.html',
})
export class SupabaseRealtimeComponent {
  demoShared: DemoSharedSupabaseRealtime;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSupabaseRealtime();
  }
}
