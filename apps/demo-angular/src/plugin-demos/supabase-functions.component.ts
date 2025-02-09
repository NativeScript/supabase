import { Component, NgZone } from '@angular/core';
import { DemoSharedSupabaseFunctions } from '@demo/shared';
import {} from '@nativescript/supabase-functions';

@Component({
  selector: 'demo-supabase-functions',
  templateUrl: 'supabase-functions.component.html',
})
export class SupabaseFunctionsComponent {
  demoShared: DemoSharedSupabaseFunctions;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSupabaseFunctions();
  }
}
