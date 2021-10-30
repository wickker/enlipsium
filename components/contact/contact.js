import React, { useState } from 'react';
import { Row } from 'antd';
import emailjs from 'emailjs-com';
import get from 'lodash';
import {
  StyledRow,
  TitleCol,
  TitleScaleAnimation,
  Title,
  MapIFrame,
  MapCol,
  FormTitle,
  FormLabel,
  FormCol,
  FormInput,
  FormAlert,
  FormTextArea,
  FormSubmitCol,
  FormSubmit,
  InfoCol,
  InfoTextCol,
  InfoDescription,
  InfoContactText,
} from './styles';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccessHidden, setIsSuccessHidden] = useState(true);

  const mapSourceUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&zoom=16&q=10%20Ubi%20Cres%20#05-70%20Singapore%20408564`;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_5f9r68f',
        'template_ptkmpeo',
        e.target,
        'user_farZtIOcf3ThcUVoGyEKv'
      )
      .then(
        (result) => {
          console.log(get(result, 'text'));
          setIsSuccessHidden(false);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(get(error, 'text'));
        }
      );
  };

  const handleName = (e) => {
    setName(get(e, 'target.value'));
  };

  const handleEmail = (e) => {
    setEmail(get(e, 'target.value'));
  };

  const handleMessage = (e) => {
    setMessage(get(e, 'target.value'));
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
        <MapIFrame src={mapSourceUrl}></MapIFrame>
      </MapCol>
      <FormCol xs={24} sm={24} md={24} lg={12}>
        <FormTitle>Contact Us</FormTitle>
        <div hidden={isSuccessHidden}>
          <FormAlert
            message='Your message was successfully sent! We will be in touch with you shortly.'
            type='success'
            showIcon
          />
        </div>
        <form className='contact-form' onSubmit={sendEmail}>
          <FormLabel>Name:</FormLabel>
          <FormInput name='from_name' value={name} onChange={handleName} />
          <FormLabel>Email:</FormLabel>
          <FormInput
            name='contact_email'
            value={email}
            onChange={handleEmail}
          />
          <FormLabel>Message:</FormLabel>
          <FormTextArea
            name='message'
            autoSize={{ minRows: 4 }}
            value={message}
            onChange={handleMessage}
          />
          <Row>
            <FormSubmitCol span={24}>
              <FormSubmit type='submit' value='Submit' />
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
          <strong>
            <u>Singapore</u>
          </strong>
          <br />
          <strong>Ubi Techpark, 10 Ubi Cres, #05-70, Singapore 408564</strong>
        </InfoContactText>
        <InfoContactText>
          <strong>
            <u>Israel</u>
          </strong>
          <br />
          <strong>Omar Ben el-Khatab 58, Kfar Qasem</strong>
        </InfoContactText>
      </InfoCol>
      <InfoTextCol>
        <InfoDescription>
          Enlipsium is a National University of Singapore (NUS) Graduate
          Research Innovation Programme (GRIP) company i.e. a spin off company
          driven by NUS-developed technology. Feel free to contact the{' '}
          <a href='http://www.nus.edu.sg/ilo' target='_blank'>
            NUS Industry Liaison Office (ILO)
          </a>{' '}
          for more information about us and our technology.
        </InfoDescription>
      </InfoTextCol>
    </StyledRow>
  );
};

export default Contact;
