import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const scale = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: white;

  &:hover {
    animation: ${scale} 0.7s cubic-bezier(0.65, 0.04, 0.16, 1.28) infinite;
    cursor: pointer;
  }
`;

export { FontAwesome };
