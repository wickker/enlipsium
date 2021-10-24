import 'antd/dist/antd.less';
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/navigation/header/Header'
// import { Menu, Row, Col, Layout } from 'antd';
// import * as Constants from '../utils/constants';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';
// import {
//   faFacebookSquare,
//   faTwitterSquare,
//   faInstagramSquare,
// } from '@fortawesome/free-brands-svg-icons';
// import { useRouter } from 'next/router';

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Karla", sans-serif;
  padding: 0; 
  margin: 0;
}
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Enlipsium</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <Header />
      <div>
        <Component {...pageProps} />
        <div>Testing the font?</div>
      </div>
    </div>
  );
};

export default MyApp;
