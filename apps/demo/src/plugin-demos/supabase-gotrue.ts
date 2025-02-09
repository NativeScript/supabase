import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSupabaseGotrue } from '@demo/shared';
import {} from 'supabase-gotrue';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSupabaseGotrue {}
