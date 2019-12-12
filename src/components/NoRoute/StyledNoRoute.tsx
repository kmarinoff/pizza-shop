import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: wheat;
  font-size: 5em;
`;

export { Wrapper, FontAwesome };
