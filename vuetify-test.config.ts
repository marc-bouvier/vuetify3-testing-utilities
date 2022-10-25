// eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
// @ts-ignore
// Solves the error : "ReferenceError: CSS is not defined"

global.CSS = { supports: () => false };

// A more advanced setup
// https://github.com/vuetifyjs/vuetify/issues/14749#issuecomment-1098227529
// https://github.com/mpont91/vue3-vuetify-tests