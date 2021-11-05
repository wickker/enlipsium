import styled from 'styled-components';
import { Col } from 'antd';
import { COLORS } from '../../../utils/constants';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const DummyCol = styled(Col)`
  && {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;

export const CopyrightTextCol = styled(DummyCol)`
  && {
    justify-content: flex-end;
    padding-left: 30px;
    font-size: 16px;
    @media (max-width: 400px) {
      font-size: 13px;
    }
  }
`;

export const IconsCol = styled(DummyCol)`
  && {
    justify-content: flex-start;
  }
`;

export const StyledFooter = styled.div`
  background-color: white;
  color: ${COLORS.DARK_GRAY};
  height: 50px;
  padding: 0px;
  border-top: 1px solid ${COLORS.BORDER};
  width: 100%;
  left: 0;
  bottom: 0;
`;

export const FontAwesomeIcon = styled(Icon)`
  && {
    min-height: 2em;
    min-width: 2em;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
