import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSupabaseRealtime } from '@demo/shared';
import {} from '@nativescript/supabase-realtime';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSupabaseRealtime {}
