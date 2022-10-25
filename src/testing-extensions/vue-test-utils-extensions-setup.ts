// Extends vue-test-utils with additional operations
import { config, DOMWrapper, type VueWrapper } from "@vue/test-utils";

export const findByTestId = (
  wrapper: VueWrapper | DOMWrapper<Node>,
  testId: string
): DOMWrapper<never> => wrapper.find(`[test-id="${testId}"]`);

const findBySelector = (
  wrapper: VueWrapper | DOMWrapper<Node>,
  selector: string
): DOMWrapper<never> => wrapper.find(`[data-selector="${selector}"]`);

const vuetifyVueWrapperTestPlugin = (wrapper: VueWrapper) => {
  return {
    findByTestId: (testId: string): DOMWrapper<never> =>
      findByTestId(wrapper, testId),
    findBySelector: (selector: string): DOMWrapper<never> =>
      findBySelector(wrapper, selector),
  };
};

const vuetifyDomWrapperTestPlugin = (wrapper: DOMWrapper<Node>) => {
  return {
    findByTestId: (testId: string): DOMWrapper<never> =>
      findByTestId(wrapper, testId),
    findBySelector: (selector: string): DOMWrapper<never> =>
      findBySelector(wrapper, selector),
  };
};

// Call install on the type you want to extend
// You can write a plugin for any value inside of config.plugins
config.plugins.VueWrapper.install(vuetifyVueWrapperTestPlugin);
config.plugins.DOMWrapper.install(vuetifyDomWrapperTestPlugin);
