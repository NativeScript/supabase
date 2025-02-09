module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx clean demo',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx clean demo-angular',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo-angular ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo-angular android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @nativescript/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@nativescript': {
      // @nativescript/supabase
      supabase: {
        build: {
          script: 'nx run supabase:build.all',
          description: '@nativescript/supabase: Build',
        },
      },
      // @nativescript/supabase-storage
      'supabase-storage': {
        build: {
          script: 'nx run supabase-storage:build.all',
          description: '@nativescript/supabase-storage: Build',
        },
      },
      // @nativescript/supabase-realtime
      'supabase-realtime': {
        build: {
          script: 'nx run supabase-realtime:build.all',
          description: '@nativescript/supabase-realtime: Build',
        },
      },
      // @nativescript/supabase-postgrest
      'supabase-postgrest': {
        build: {
          script: 'nx run supabase-postgrest:build.all',
          description: '@nativescript/supabase-postgrest: Build',
        },
      },
      // @nativescript/supabase-gotrue
      'supabase-gotrue': {
        build: {
          script: 'nx run supabase-gotrue:build.all',
          description: '@nativescript/supabase-gotrue: Build',
        },
      },
      // @nativescript/supabase-functions
      'supabase-functions': {
        build: {
          script: 'nx run supabase-functions:build.all',
          description: '@nativescript/supabase-functions: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      supabase: {
        script: 'nx run supabase:focus',
        description: 'Focus on @nativescript/supabase',
      },
      'supabase-storage': {
        script: 'nx run supabase-storage:focus',
        description: 'Focus on @nativescript/supabase-storage',
      },
      'supabase-realtime': {
        script: 'nx run supabase-realtime:focus',
        description: 'Focus on @nativescript/supabase-realtime',
      },
      'supabase-postgrest': {
        script: 'nx run supabase-postgrest:focus',
        description: 'Focus on @nativescript/supabase-postgrest',
      },
      'supabase-gotrue': {
        script: 'nx run supabase-gotrue:focus',
        description: 'Focus on @nativescript/supabase-gotrue',
      },
      'supabase-functions': {
        script: 'nx run supabase-functions:focus',
        description: 'Focus on @nativescript/supabase-functions',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
