import React from "react";
import styled from "styled-components";
import * as Constants from "../utils/constants";
import { Row, Col, Input, Alert } from "antd";
import emailjs from "emailjs-com";

const StyledIFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  box-shadow: 3px 3px 10px ${Constants.lightGray};
  border-radius: 20px;
`;

const StyledRow = styled(Row)`
  && {
    display: flex;
    align-items: center;
  }
`;

const MapCol = styled(Col)`
  && {
    padding: 60px 40px 60px 90px;
    height: 75vh;
    @media only screen and (max-width: 1000px) {
      padding: 30px;
    }
  }
`;

const FormTitle = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  color: ${Constants.gray};
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  color: white;
`;

const FormLabel = styled.div`
  color: ${Constants.semiBlack};
  margin-bottom: 3px;
  font-size: 16px;
`;

const FormCol = styled(Col)`
  && {
    padding: 60px 90px 40px 60px;
    @media only screen and (max-width: 1000px) {
      padding: 30px;
    }
  }
`;

const StyledInput = styled(Input)`
  && {
    margin-bottom: 15px;
  }
`;

const StyledAlert = styled(Alert)`
  && {
    margin-bottom: 15px;
  }
`;

const StyledTA = styled(Input.TextArea)`
  && {
    margin-bottom: 20px;
  }
`;

const StyledInputButton = styled.input`
  background: ${Constants.darkGray};
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: solid 3px ${Constants.marine};
  padding: 5px 30px;
  font-size: 15px;
  &:hover {
    box-shadow: 0 6px 6px -6px ${Constants.marine};
    cursor: pointer;
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
  }
`;

const InfoCol = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    padding: 60px 90px 0 90px;
  }
`;

const InfoCol2 = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    padding: 0 30% 60px 30%;
    @media only screen and (max-width: 1000px) {
      padding: 0 30px 60px 30px;
    }
  }
`;

const ButtonCol = styled(Col)`
  && {
    display: flex;
    justify-content: flex-start;
  }
`;

const InfoText = styled.div`
  color: ${Constants.lightGray};
  font-size: 13px;
  text-align: center;
`;

const ContactText = styled.div`
  color: ${Constants.gray};
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
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
        <StyledIFrame src={mapSourceURL}></StyledIFrame>
      </MapCol>
      <FormCol xs={24} sm={24} md={24} lg={12}>
        <FormTitle>Contact Us</FormTitle>
        <div hidden={isSuccessHidden}>
          <StyledAlert
            message="Your message was successfully sent! We will be in touch with you shortly."
            type="success"
            showIcon
          />
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <FormLabel>Name:</FormLabel>
          <StyledInput name="from_name" value={name} onChange={handleName} />
          <FormLabel>Email:</FormLabel>
          <StyledInput
            name="contact_email"
            value={email}
            onChange={handleEmail}
          />
          <FormLabel>Message:</FormLabel>
          <StyledTA
            name="message"
            autoSize={{ minRows: 4 }}
            value={message}
            onChange={handleMessage}
          />
          <Row>
            <ButtonCol span={24}>
              <StyledInputButton type="submit" value="Submit" />
            </ButtonCol>
          </Row>
        </form>
      </FormCol>
      <InfoCol span={24}>
        <ContactText>
          <strong>Ubi Techpark, 10 Ubi Cres, #05-70, Singapore 408564</strong>
        </ContactText>
        <ContactText>
          <strong>ttham@enlipsium.com</strong>
        </ContactText>
      </InfoCol>
      <InfoCol2>
        <InfoText>
          Enlipsium is a National University of Singapore (NUS) Graduate
          Research Innovation Programme (GRIP) company i.e. a spin off company
          driven by NUS-developed technology. Please feel free to contact the{" "}
          <a href="http://www.nus.edu.sg/ilo" target="_blank">
            NUS Industry Liaison Office (ILO)
          </a>{" "}
          for more information about us and our technology.
        </InfoText>
      </InfoCol2>
    </StyledRow>
  );
}
