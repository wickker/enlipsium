import "antd/dist/antd.less";
import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { Menu, Row, Col, Layout } from "antd";
import * as Constants from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const { Footer, Content } = Layout;

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Arial", sans-serif;
  padding: 0; 
  margin: 0;
  font-size: 16px;
}
`;

const StyledUL = styled.ul`
  padding: 0;
  margin: 0;
  .ant-menu-horizontal {
    line-height: 50px;
  }
  .ant-menu {
    text-align: right;
    font-size: 14px;
    border-bottom: none;
    background: white;
    color: ${Constants.semiBlack};
    border-bottom: 1px solid #f0f0f0;
  }
`;

const StyledCol = styled(Col)`
  && {
    font-size: 14px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid #f0f0f0;
    @media only screen and (max-width: 900px) {
      word-break: break-all;
    }
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;

const StyledCol2 = styled(Col)`
  && {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;

const Copyright = styled(StyledCol2)`
  && {
    justify-content: flex-end;
    padding-left: 30px;
  }
`;

const Icons = styled(StyledCol2)`
  && {
    justify-content: flex-start;
  }
`;

const StyledRow2 = styled(Row)`
  && {
    height: 100%;
  }
`;

const StyledRow = styled(Row)`
  && {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background-color: white;
    color: ${Constants.semiBlack};
  }
`;

const StyledContent = styled(Content)`
  && {
    background-color: white;
    padding-top: 50px;
  }
`;

const StyledFooter = styled(Footer)`
  && {
    background-color: white;
    font-size: 14px;
    color: ${Constants.gray};
    height: 50px;
    padding: 0;
    border-top: 1px solid #f0f0f0;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  && {
    min-height: 2em;
    min-width: 2em;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const { SubMenu } = Menu;

export default function MyApp({ Component, pageProps }) {
  const [currentOption, setCurrentOption] = React.useState("mail");

  const handleClickMenuItem = (e) => {
    console.log("Click: ", e);
    setCurrentOption(e.key);
  };

  return (
    <div>
      <Head>
        <title>Enlipsium</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Layout>
        <StyledRow>
          <StyledCol xs={0} sm={1} md={3} lg={3}></StyledCol>
          <StyledCol xs={0} sm={3} md={3} lg={3}>
            Enlipsium
          </StyledCol>
          <Col xs={24} sm={19} md={15} lg={15}>
            <StyledUL>
              <Menu
                onClick={handleClickMenuItem}
                selectedKeys={[currentOption]}
                mode="horizontal"
              >
                <SubMenu key="Products" title="Products">
                  <Menu.ItemGroup title="Nanoparticles">
                    <Menu.Item key="UCNPs">
                      Upconverting Nanoparticles (UCNPs)
                    </Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Quantum Dots">
                    <Menu.Item key="PerovskiteNanocrystals">
                      CsPbX3 Perovskite Nanocrystals
                    </Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="Scintillator">Scintillator</Menu.Item>
                <Menu.Item key="Contact">Contact Us</Menu.Item>
              </Menu>
            </StyledUL>
          </Col>
          <StyledCol xs={0} sm={1} md={3} lg={3}></StyledCol>
        </StyledRow>
        <StyledContent>
          <Component {...pageProps} />
        </StyledContent>
        <StyledFooter>
          <StyledRow2>
            <Copyright xs={11} sm={11} md={8} lg={8}>
              © 2020 Enlipsium All Rights Reserved
            </Copyright>
            <StyledCol2 xs={2} sm={2} md={8} lg={8}></StyledCol2>
            <Icons xs={11} sm={11} md={8} lg={8}>
              <StyledFontAwesomeIcon icon={faFacebookSquare} />
              <StyledFontAwesomeIcon icon={faTwitterSquare} />
              <StyledFontAwesomeIcon icon={faInstagramSquare} />
            </Icons>
          </StyledRow2>
        </StyledFooter>
      </Layout>
    </div>
  );
}
