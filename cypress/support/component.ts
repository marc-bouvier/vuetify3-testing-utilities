// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/vue";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";

loadFonts();

// TODO : find out how to address properly
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Cypress.Commands.add("mount", (MountedComponent: any, options) => {
  // TODO : find out how to address properly
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const root = document.getElementById("__cy_root");
  // Vuetify styling
  if (!root.classList.contains("v-application")) {
    root.classList.add("v-application");
  }
  // Vuetify selector used for popup elements to attach to the DOM
  root.setAttribute("data-app", "true");

  return mount(MountedComponent, {
    global: {
      plugins: [vuetify],
    },
    ...options, // To override values for specific tests
  });
});
