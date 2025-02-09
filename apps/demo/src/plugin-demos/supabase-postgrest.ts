import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSupabasePostgrest } from '@demo/shared';
import {} from '@nativescript/supabase-postgrest';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSupabasePostgrest {}
