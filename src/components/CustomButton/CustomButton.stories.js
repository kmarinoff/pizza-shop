import { action } from "@storybook/addon-actions";
import React from "react";
import { CustomButton } from "./CustomButton";

export default {
  title: "CustomButton Component",
  component: CustomButton
};

export const Button = () => (
  <CustomButton
    buttonText="Order"
    bsPrefix="custom-btn"
    onClick={action("clicked")}
  />
);
