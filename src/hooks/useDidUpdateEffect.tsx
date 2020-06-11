import React from "react";

const useDidUpdateEffect = (fn: React.EffectCallback, deps?: any[]) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      return fn();
    } else {
      didMount.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export { useDidUpdateEffect };
