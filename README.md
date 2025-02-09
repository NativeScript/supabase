- [@nativescript/supabase](packages/supabase/README.md)
- [@nativescript/supabase-functions](packages/supabase-functions/README.md)
- [@nativescript/supabase-gotrue](packages/supabase-gotrue/README.md)
- [@nativescript/supabase-postgrest](packages/supabase-postgrest/README.md)
- [@nativescript/supabase-realtime](packages/supabase-realtime/README.md)
- [@nativescript/supabase-storage](packages/supabase-storage/README.md)

# How to use?

This workspace manages the suite of plugins listed above, tap each above for details.

## Prerequisites for Contributing

- Node 20+ is recommended
- [yarn v1](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) is used for dependency hoisting.

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: *good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)*

<h3 align="center">Made with ❤️</h3>
