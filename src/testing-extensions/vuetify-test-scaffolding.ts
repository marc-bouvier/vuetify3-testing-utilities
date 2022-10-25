/**
 * To avoid error : "ResizeObserver is not defined"
 */
export function mockResizeObserver() {
  class ResizeObserver {
    observe() {
      /* empty method on purpose */
    }

    unobserve() {
      /* empty method on purpose */
    }

    disconnect() {
      /* empty method on purpose */
    }
  }

  window.ResizeObserver = ResizeObserver;
}
