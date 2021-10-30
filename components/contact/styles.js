import styled, { keyframes } from "styled-components";
import { Col, Row, Input, Alert } from 'antd';
import { COLORS } from '../../utils/constants';

export const StyledRow = styled(Row)`
  && {
    display: flex;
    align-items: center;
  }
`;

export const TitleCol = styled(Col)`
  && {
    background-color: ${COLORS.DARK_GRAY};
    padding: 60px 90px;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 400px) {
      padding: 60px 30px;
    }
  }
`;

export const TitleScaleAnimation = keyframes`
  from {
    font-size: 25px;
  }
  to {
    font-size: 35px;
  }
`;

export const Title = styled.div`
  font-size: 35px;
  font-family: "Montserrat", sans-serif;
  color: white;
  animation: ${TitleScaleAnimation} 0.5s linear 1;
  text-align: center;
`;

export const MapIFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  box-shadow: 3px 3px 10px ${COLORS.LIGHT_GRAY};
  border-radius: 20px;
`;

export const MapCol = styled(Col)`
  && {
    padding: 60px 40px 60px 90px;
    height: 75vh;
    @media only screen and (max-width: 991px) {
      padding: 30px;
    }
  }
`;

export const FormTitle = styled.div`
  margin-bottom: 20px;
  font-size: 50px;
  color: ${COLORS.GRAY};
  @media only screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

export const FormLabel = styled.div`
  color: ${COLORS.SEMI_BLACK};
  margin-bottom: 3px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

export const FormCol = styled(Col)`
  && {
    padding: 60px 90px 40px 60px;
    @media only screen and (max-width: 991px) {
      padding: 30px;
    }
  }
`;

export const FormInput = styled(Input)`
  && {
    margin-bottom: 15px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const FormAlert = styled(Alert)`
  && {
    margin-bottom: 15px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const FormTextArea = styled(Input.TextArea)`
  && {
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const FormSubmitCol = styled(Col)`
  && {
    display: flex;
    justify-content: flex-start;
  }
`;

export const FormSubmit = styled.input`
  background: ${COLORS.DARK_GRAY};
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: solid 3px ${COLORS.MARINE};
  padding: 5px 30px;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  &:hover {
    box-shadow: 0 6px 6px -6px ${COLORS.MARINE};
    cursor: pointer;
  }
`;

export const InfoCol = styled(Col)`
  && {
    background-color: ${COLORS.LIGHTEST_GRAY};
    padding: 60px 90px 0 90px;
    @media only screen and (max-width: 400px) {
      padding: 60px 30px 0 30px;
    }
  }
`;

export const InfoTextCol = styled(Col)`
  && {
    background-color: ${COLORS.LIGHTEST_GRAY};
    padding: 0 30% 60px 30%;
    @media only screen and (max-width: 991px) {
      padding: 0 30px 60px 30px;
    }
  }
`;

export const InfoDescription = styled.div`
  color: ${COLORS.LIGHT_GRAY};
  font-size: 13px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const InfoContactText = styled.div`
  color: ${COLORS.GRAY};
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;