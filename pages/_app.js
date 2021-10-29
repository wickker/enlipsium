import 'antd/dist/antd.less';
import React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/navigation/header/header';
import Footer from '../components/navigation/footer/footer';
import { Layout } from 'antd';

const { Content } = Layout;

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Karla", sans-serif;
  padding: 0; 
  margin: 0;
}
`;

const StyledContent = styled(Content)`
  && {
    background-color: white;
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Enlipsium</title>
        // favicon
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
        // fonts
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
      <StyledContent>
        <Component {...pageProps} />
      </StyledContent>
      <Footer />
    </div>
  );
};

export default MyApp;
