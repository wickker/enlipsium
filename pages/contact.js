import React from "react";
import styled, { keyframes } from "styled-components";
import * as Constants from "../utils/constants";
import { Row, Col, Input, Alert } from "antd";
import emailjs from "emailjs-com";

const StyledRow = styled(Row)`
  && {
    display: flex;
    align-items: center;
  }
`;

const TitleCol = styled(Col)`
  && {
    background-color: ${Constants.darkGray};
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

const TitleScaleAnimation = keyframes`
  from {
    font-size: 25px;
  }
  to {
    font-size: 35px;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-family: "Montserrat", sans-serif;
  color: white;
  animation: ${TitleScaleAnimation} 0.5s linear 1;
  text-align: center;
`;

const MapIFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  box-shadow: 3px 3px 10px ${Constants.lightGray};
  border-radius: 20px;
`;

const MapCol = styled(Col)`
  && {
    padding: 60px 40px 60px 90px;
    height: 75vh;
    @media only screen and (max-width: 991px) {
      padding: 30px;
    }
  }
`;

const FormTitle = styled.div`
  margin-bottom: 20px;
  font-size: 50px;
  color: ${Constants.gray};
  @media only screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

const FormLabel = styled.div`
  color: ${Constants.semiBlack};
  margin-bottom: 3px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

const FormCol = styled(Col)`
  && {
    padding: 60px 90px 40px 60px;
    @media only screen and (max-width: 991px) {
      padding: 30px;
    }
  }
`;

const FormInput = styled(Input)`
  && {
    margin-bottom: 15px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

const FormAlert = styled(Alert)`
  && {
    margin-bottom: 15px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

const FormTextArea = styled(Input.TextArea)`
  && {
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

const FormSubmitCol = styled(Col)`
  && {
    display: flex;
    justify-content: flex-start;
  }
`;

const FormSubmit = styled.input`
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

const InfoCol = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    padding: 60px 90px 0 90px;
    @media only screen and (max-width: 400px) {
      padding: 60px 30px 0 30px;
    }
  }
`;

const InfoTextCol = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    padding: 0 30% 60px 30%;
    @media only screen and (max-width: 991px) {
      padding: 0 30px 60px 30px;
    }
  }
`;

const InfoDescription = styled.div`
  color: ${Constants.lightGray};
  font-size: 13px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const InfoContactText = styled.div`
  color: ${Constants.gray};
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSuccessHidden, setIsSuccessHidden] = React.useState(true);

  const apiKeyGoogle = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const mapSourceURL =
    "https://www.google.com/maps/embed/v1/place?key=" +
    apiKeyGoogle +
    "&zoom=16&q=10%20Ubi%20Cres%20#05-70%20Singapore%20408564";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5f9r68f",
        "template_ptkmpeo",
        e.target,
        "user_farZtIOcf3ThcUVoGyEKv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccessHidden(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <StyledRow>
      <TitleCol span={24}>
        <Title>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us...
        </Title>
      </TitleCol>
      <MapCol xs={24} sm={24} md={24} lg={12}>
        <MapIFrame src={mapSourceURL}></MapIFrame>
      </MapCol>
      <FormCol xs={24} sm={24} md={24} lg={12}>
        <FormTitle>Contact Us</FormTitle>
        <div hidden={isSuccessHidden}>
          <FormAlert
            message="Your message was successfully sent! We will be in touch with you shortly."
            type="success"
            showIcon
          />
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <FormLabel>Name:</FormLabel>
          <FormInput name="from_name" value={name} onChange={handleName} />
          <FormLabel>Email:</FormLabel>
          <FormInput
            name="contact_email"
            value={email}
            onChange={handleEmail}
          />
          <FormLabel>Message:</FormLabel>
          <FormTextArea
            name="message"
            autoSize={{ minRows: 4 }}
            value={message}
            onChange={handleMessage}
          />
          <Row>
            <FormSubmitCol span={24}>
              <FormSubmit type="submit" value="Submit" />
            </FormSubmitCol>
          </Row>
        </form>
      </FormCol>
      <InfoCol span={24}>
        <InfoContactText>
          <strong>ttham@enlipsium.com</strong>
        </InfoContactText>
        <InfoContactText>
          <strong>+65 6980 0705</strong>
        </InfoContactText>
        <InfoContactText>
        <strong><u>Singapore</u></strong><br/>
          <strong>Ubi Techpark, 10 Ubi Cres, #05-70, Singapore 408564</strong>
        </InfoContactText>
        <InfoContactText>
          <strong><u>Israel</u></strong><br/>
          <strong>Omar Ben el-Khatab 58, Kfar Qasem</strong>
        </InfoContactText>
      </InfoCol>
      <InfoTextCol>
        <InfoDescription>
          Enlipsium is a National University of Singapore (NUS) Graduate
          Research Innovation Programme (GRIP) company i.e. a spin off company
          driven by NUS-developed technology. Feel free to contact the{" "}
          <a href="http://www.nus.edu.sg/ilo" target="_blank">
            NUS Industry Liaison Office (ILO)
          </a>{" "}
          for more information about us and our technology.
        </InfoDescription>
      </InfoTextCol>
    </StyledRow>
  );
}
