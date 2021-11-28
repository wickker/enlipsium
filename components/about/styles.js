import styled from 'styled-components';
import { Col, Row } from 'antd';
import { COLORS } from '../../utils/constants';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const StyledRow = styled(Row)`
  && {
    min-height: 94vh;
  }
`;

export const TeamTitle = styled.div`
  font-size: 55px;
  // text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  background-color: ${COLORS.MEDIUM_GRAY};
  text-align: center;
  color: ${COLORS.ORANGE};
  padding: 50px 30px 10px 30px;
`;

const renderImage = (name) => {
  switch (name) {
    case 'yzhar':
      return 'yzharperry.webp';
    case 'tommy':
      return 'tommytham.webp';
    case 'qiu':
      return 'chenqiushui.webp';
    case 'xiao':
      return 'xiaogangliu.webp';
  }
};

export const ImageCol = styled.div`
  background-image: ${(props) => `url(${renderImage(props.path)})`};
  width: 100%;
  height: 50vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 30px;
  // border-radius: 24px;
  // &:hover {
  //   .info {
  //     height: 24%;
  //     transition: 0.5s ease;
  //   }
  // }
  // @media only screen and (max-width: 576px) {
  //   .info {
  //     height: 24%;
  //   }
  // }
`;

export const Info = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  color: black;
  height: 0%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
`;

export const Position = styled.div`
  text-align: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
`;

export const TeamTagline = styled.div`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  background-color: ${COLORS.MEDIUM_GRAY};
  text-align: center;
  color: ${COLORS.LIGHTEST_GRAY};
  padding: 0px 30px 20px 30px;
  letter-spacing: 1px;
`;

export const TeamRow = styled(Row)`
  && {
    width: 101.5%;
    padding: 0px 10% 70px 10%;
    background-color: #3B3B3B;
  }
`;

export const TeamName = styled.div`
  font-size: 17px;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const TeamPosition = styled.div`
  font-size: 17px;
  color: ${COLORS.LIGHTEST_GRAY};
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const MainContainer = styled(Row)`
  && {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 48px;
  }
`;

export const TitleCol = styled(Col)`
  && {
    background-color: ${COLORS.LIGHTER_GRAY};
    display: flex;
    flex-direction: col;
    align-items: center;
    color: ${COLORS.ORANGE};
    font-size: 60px;
    letter-spacing: 2px;
    text-transform: uppercase;
    span {
      display: block;
      width: 100%;
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      text-align: center;
    }
    @media only screen and (max-width: 576px) {
      span {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
      }
    }
  }
`;

export const WriteUpCol = styled(Col)`
  && {
    background-color: ${COLORS.LIGHTEST_GRAY};
    padding: 100px 70px;
    @media only screen and (max-width: 576px) {
      padding: 50px;
    }
  }
`;

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: black;
`;

export const FontAwesomeIcon = styled(Icon)`
  && {
    min-height: 1.3em;
    min-width: 1.3em;
    color: ${COLORS.ORANGE};
    margin-right: 5px;
    vertical-align: middle;
    margin-top: 2px;
  }
`;

export const List = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: black;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
`;

export const LinkSpan = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
