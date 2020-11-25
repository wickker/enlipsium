import styled from "styled-components";
import PropTypes from "prop-types";
import * as Constants from "../utils/constants";

const StyledButton = styled.button`
  background: ${Constants.darkGray};
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: solid 3px ${Constants.marine};
  padding: 5px 30px;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  &:hover {
    box-shadow: 0 6px 6px -6px ${Constants.marine};
    cursor: pointer;
  }
`;

export default function Button({ buttonText, onClick }) {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
}

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};
