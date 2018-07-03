// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { enableProdMode } from "@angular/core";
import { AppOptions } from "nativescript-angular/platform-common";
import { APP_ROOT_VIEW } from "nativescript-angular/platform-providers";
import { run } from "tns-core-modules/application";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { AppModule } from "./app.module";

/* ***********************************************************
* The {N} Kinvey plugin needs some initialization steps before it is ready
* for use. Check out the initialization script at /shared/kinvey.common.ts
* along with more information about it.
*************************************************************/
import "./shared/kinvey.common";

run({
  create: () => {
    // Create root view for the application.
    const root = new GridLayout();

    const appOptions: AppOptions = {
      startPageActionBarHidden: true,
      bootInExistingPage: true
    };

    const extraProviders = [{ provide: APP_ROOT_VIEW, useValue: root }];

    enableProdMode();

    platformNativeScriptDynamic(appOptions, extraProviders)
      .bootstrapModule(AppModule);

    return root;
  }
});
