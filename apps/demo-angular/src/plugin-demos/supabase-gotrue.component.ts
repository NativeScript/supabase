import { Component, NgZone } from '@angular/core';
import { DemoSharedSupabaseGotrue } from '@demo/shared';
import {} from 'supabase-gotrue';

@Component({
  selector: 'demo-supabase-gotrue',
  templateUrl: 'supabase-gotrue.component.html',
})
export class SupabaseGotrueComponent {
  demoShared: DemoSharedSupabaseGotrue;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSupabaseGotrue();
  }
}
