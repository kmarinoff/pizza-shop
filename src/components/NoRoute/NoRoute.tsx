import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import { FontAwesome, Wrapper } from "./StyledNoRoute";

const NoRoute: FC = () => {
  return (
    <Wrapper>
      <FontAwesome icon={faSadTear} />
      <h1>404 NOT FOUND</h1>
      <Link to="/">Go to home page</Link>
    </Wrapper>
  );
};

export { NoRoute };
