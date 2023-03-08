import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import { VApp } from "vuetify/components";
import * as directives from "vuetify/directives";
import {
  render,
  type RenderOptions,
  type RenderResult,
} from "@testing-library/vue";
import { mockResizeObserver } from "./vuetify-test-scaffolding";
import { type Component, h } from "vue";

const vuetify = createVuetify({ components, directives });

/**
 * Simplified component rendering with vuetify
 * @param component
 * @param props
 * @see <a href="https://testing-library.com/docs/vue-testing-library/api#rendercomponent-options">testing-library-vue `render()`</a>
 */
export const renderComponent = (
  component: never,
  props?: never
): RenderResult => {
  return renderv(component, { props });
};

/**
 * Similar to testing-library-vue `render()`
 *
 * Handles the common errors when testing with vuetify:
 *
 * - "[Vuetify] Could not find defaults instance"
 * - "Error: Could not find injected Vuetify layout"
 *
 * By doing the following:
 *
 * - wraps component with a root div : `<div data-app="true">`
 * - inject vuetify plugin
 *
 * @see <a href="https://testing-library.com/docs/vue-testing-library/api#rendercomponent-options">testing-library-vue `render()`</a>
 * @see <a href="https://next.vuetifyjs.com/en/components/application/#application-components">Vuetify Application Components</a>
 * @see <a href="https://github.com/testing-library/vue-testing-library/blob/main/src/__tests__/vuetify.js">Examples of using vuetify with testing-library</a>
 * @param component
 * @param options
 */
export const renderv = (
  component: Component,
  options?: RenderOptions
): RenderResult => {
  let plugins = [vuetify];
  if (options?.global?.plugins !== undefined) {
    const providedPlugins = options?.global?.plugins;
    plugins = [...providedPlugins, plugins];
  }

  mockResizeObserver();

  return render(VApp, {
    slots: { default: h(component) },
    global: {
      plugins,
    },
    ...options,
  });
};
