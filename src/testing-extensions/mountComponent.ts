import { mount, VueWrapper } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import { VApp } from "vuetify/components";
import * as directives from "vuetify/directives";
import type { RenderOptions } from "@testing-library/vue";
import { mockResizeObserver } from "./vuetify-test-scaffolding";
import { h } from "vue";

const vuetify = createVuetify({ components, directives });
/**
 * Simplified component mounting with vuetify
 * @param component
 * @param props
 * @see <a href="https://test-utils.vuejs.org/api/#mount">vue-test-utils `mount()`</a>
 */
export const mountComponent = (component: any, props?: any): VueWrapper => {
  return mount(component, { props });
};

/**
 * Similar to vue-test-utils `mount()`
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
 * @see <a href="https://test-utils.vuejs.org/api/#mount">vue-test-utils `mount()`</a>
 * @see <a href="https://next.vuetifyjs.com/en/components/application/#application-components">Vuetify Application Components</a>
 * @param component
 * @param options
 */
export const mountv = (component: any, options?: RenderOptions): VueWrapper => {
  let plugins = [vuetify];
  if (options?.global?.plugins !== undefined) {
    const providedPlugins = options?.global?.plugins;
    plugins = [...providedPlugins, plugins];
  }
  mockResizeObserver();

  return mount(VApp, {
    slots:{default:h(component)},
        global: {
      plugins,
    },
    ...options,
  });
};
