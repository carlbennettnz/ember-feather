/* thanks cibernox (https://github.com/cibernox/ember-basic-dropdown/blob/master/addon/utils/computed-fallback-if-undefined.js) */

import { computed } from "@ember/object";

export default function computedFallbackIfUndefined(fallback) {
  return computed({
    get() {
      return fallback;
    },
    set(_, v) {
      return v === undefined ? fallback : v;
    }
  });
}