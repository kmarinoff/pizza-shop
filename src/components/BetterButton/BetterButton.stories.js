import React from "react";
import { BetterButton } from "./BetterButton";
import { action } from "@storybook/addon-actions";

export default {
  component: BetterButton,
  title: "BetterButton",
  excludeStories: /.*Data$/
};

export const actionsData = {
  onClick: action("onClick")
};

export const Default = () => (
  <BetterButton
    bsPrefix="custom"
    buttonText="Default"
    onClick={actionsData.onClick}
  />
);

export const Loading = () => <BetterButton bsPrefix="custom" loading={true} />;

export const Disabled = () => (
  <BetterButton bsPrefix="custom" buttonText="Disabled" disabled={true} />
);
