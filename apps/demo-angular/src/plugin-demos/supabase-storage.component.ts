import { Component, NgZone } from '@angular/core';
import { DemoSharedSupabaseStorage } from '@demo/shared';
import {} from '@nativescript/supabase-storage';

@Component({
  selector: 'demo-supabase-storage',
  templateUrl: 'supabase-storage.component.html',
})
export class SupabaseStorageComponent {
  demoShared: DemoSharedSupabaseStorage;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSupabaseStorage();
  }
}
