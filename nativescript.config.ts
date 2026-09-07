import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.nsvuevitedemo',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  bundlerConfigPath: 'vite.config.mts',
  bundler: 'vite',
} as NativeScriptConfig;