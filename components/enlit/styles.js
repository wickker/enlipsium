import { Col, Row, Table } from 'antd';
import { COLORS } from '../../utils/constants';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const ImageCol = styled(Col)`
  && {
    background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(113, 173, 223, 0.2),
        rgba(255, 255, 255, 0.4)
      ),
      url('building.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
    background-position: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const LogoImg = styled.img`
  width: 35%;
  object-fit: cover;
  margin: 120px 80px 0px 80px;
  @media (max-width: 540px) {
    width: 50%;
  }
`;

export const Tagline = styled.div`
  margin: -5px 268px;
  color: ${COLORS.GRAY};
  letter-spacing: 1px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
`;
