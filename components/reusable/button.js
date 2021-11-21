import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../utils/constants';

const handleColorSelection = (color) => {
  switch (color) {
    case 'orange':
      return COLORS.ORANGE;
    case 'marine':
      return COLORS.MARINE;
  }
};

const StyledButton = styled.button`
  // background-color: ${(props) => handleColorSelection(props.inputColor)};
  background-color: ${COLORS.GRAY};
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  padding: 10px 30px;
  font-size: 16px;
  max-width: 173px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${COLORS.SEMI_BLACK};
    cursor: pointer;
  }
`;

const Button = ({ buttonText, onClick, inputColor, style }) => {
  return (
    <StyledButton onClick={onClick} inputColor={inputColor} style={style}>
      {buttonText}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  inputColor: PropTypes.string,
  style: PropTypes.object,
};
