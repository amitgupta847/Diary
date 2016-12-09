/// <reference path="../typings/index.d.ts" />
// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './boot';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);