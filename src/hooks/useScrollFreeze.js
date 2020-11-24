import { useLayoutEffect } from "react";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export function useScrollFreeze(scrollableOnLock) {
  useLayoutEffect(() => {
    var originalHtml = window.getComputedStyle(document.documentElement)
      .overflow;
    disableBodyScroll(scrollableOnLock);

    document.documentElement.style.overflow = "hidden";

    return () => {
      enableBodyScroll(scrollableOnLock);
      clearAllBodyScrollLocks();

      document.documentElement.style.overflow = originalHtml;
    };
  }, []);
}
