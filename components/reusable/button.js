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
  background: ${COLORS.DARK_GRAY};
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: solid 3px ${(props) => handleColorSelection(props.inputColor)};
  padding: 10px 30px;
  font-size: 15px;
  transition: background-color 1s ease;
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
