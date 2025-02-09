import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSupabase } from '@demo/shared';
import {} from '@nativescript/supabase';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSupabase {}
