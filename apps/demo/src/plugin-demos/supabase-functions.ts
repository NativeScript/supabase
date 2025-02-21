import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSupabaseFunctions } from '@demo/shared';
import {} from '@nativescript/supabase-functions';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSupabaseFunctions {}
