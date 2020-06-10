import React from "react";
import { BetterButton } from "./BetterButton";

export default {
  component: BetterButton,
  title: "BetterButton",
  excludeStories: /.*Data$/
};

export const Default = () => (
  <BetterButton bsPrefix="custom" buttonText="Default" />
);

export const Loading = () => <BetterButton bsPrefix="custom" loading={true} />;

export const Disabled = () => (
  <BetterButton bsPrefix="custom" buttonText="Disabled" disabled={true} />
);
