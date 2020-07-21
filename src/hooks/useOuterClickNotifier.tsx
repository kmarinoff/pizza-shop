/* eslint-disable */

import React from "react";

function useOuterClickNotifier(onOuterClick: any, innerRef: any) {
  React.useEffect(
    () => {
      // only add listener, if the element exists
      if (innerRef.current) {
        document.addEventListener("click", handleClick);
      }

      // unmount previous first in case inputs have changed
      return () => document.removeEventListener("click", handleClick);

      function handleClick(e: any) {
        // tslint:disable-next-line:no-unused-expression
        innerRef.current &&
          !innerRef.current.contains(e.target) &&
          onOuterClick(e);
      }
    },
    [onOuterClick, innerRef] // invoke again, if inputs have changed
  );
}
export { useOuterClickNotifier };
