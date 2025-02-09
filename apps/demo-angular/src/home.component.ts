import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'supabase',
    },
    {
      name: 'supabase-functions',
    },
    {
      name: 'supabase-gotrue',
    },
    {
      name: 'supabase-postgrest',
    },
    {
      name: 'supabase-realtime',
    },
    {
      name: 'supabase-storage',
    },
  ];
}
