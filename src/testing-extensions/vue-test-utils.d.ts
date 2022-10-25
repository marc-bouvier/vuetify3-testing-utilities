// Extends vue-test-utils with additional operations
import { DOMWrapper } from "@vue/test-utils";

/*
 * Allows custom wrapper methods to be available in code completion.
 * <ul>
 *   <li>wrapper.findByTestId(testId)</li>
 * </ul>
 */
declare module "@vue/test-utils" {
  export class VueWrapper {
    /**
     * find one element by id
     * @param testId
     */
    findByTestId(testId: string): DOMWrapper<any>;

    /**
     * find one element with a selector : "data-selector"
     * @param selector
     */
    findBySelector(selector: string): DOMWrapper<any>;
  }
}