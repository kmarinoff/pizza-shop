import _ from "lodash";

const createLoadingSelector = (actions: any) => (state: any) => {
  // returns true only when all actions is not loading
  return _(actions).some(action => _.get(state, `api.loading.${action}`));
};

export { createLoadingSelector };
