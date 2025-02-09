import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSupabaseStorage } from '@demo/shared';
import {} from '@nativescript/supabase-storage';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSupabaseStorage {}
