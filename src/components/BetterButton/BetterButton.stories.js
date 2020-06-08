import { action } from "@storybook/addon-actions";
import React from "react";
import { BetterButton } from "./BetterButton";

export default {
  title: "BetterButton Component",
  component: BetterButton
};

export const Button = () => (
  <BetterButton onClick={action("clicked")} text="Better Button" />
);
