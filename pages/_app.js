import "antd/dist/antd.less";
import React, { useEffect } from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { Menu, Row, Col, Layout } from "antd";
import * as Constants from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const { Footer, Content } = Layout;

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Montserrat", sans-serif;
  padding: 0; 
  margin: 0;
  font-size: 16px;
  font-weight: 400;
}
`;

const StyledUL = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .ant-menu-horizontal {
    line-height: 50px;
  }
  .ant-menu {
    text-align: right;
    font-size: 14px;
    background: white;
    color: ${Constants.semiBlack};
    border: none;
  }
  @media only screen and (max-width: 991px) {
    justify-content: center;
  }
  @media only screen and (max-width: 465px) {
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
      margin: 0 15px;
  }
  @media only screen and (max-width: 400px) {
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
      margin: 0 10px;
      font-size: 13px;
  }
  @media only screen and (max-width: 340px) {
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
      margin: 0 8px;
      font-size: 12px;
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
    @media only screen and (max-width: 991px) {
      // word-break: break-all;
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

const StyledColLogo = styled(StyledCol)`
  && {
    &:hover {
      cursor: pointer;
    }
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

const Copyright = styled(StyledCol2)`
  && {
    justify-content: flex-end;
    padding-left: 30px;
    @media only screen and (max-width: 400px) {
      font-size: 13px;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${Constants.headerBorder};
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
    color: ${Constants.darkGray};
    height: 50px;
    padding: 0;
    border-top: 1px solid #f0f0f0;
    width: 100%;
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

const Home = styled(Menu.Item)`
  && {
    display: none;
    @media only screen and (max-width: 991px) {
      display: inline-block;
    }
  }
`;

const { SubMenu } = Menu;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [routerOption, setRouterOption] = React.useState(router.pathname);

  useEffect(() => {
    setRouterOption(router.pathname);
  }, [router.pathname]);

  const onEnlipsiumClick = () => {
    window.location.assign("/");
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
      </Head>
      <GlobalStyle />
      <Layout>
        <StyledRow>
          <StyledCol xs={0} sm={0} md={3} lg={3}></StyledCol>
          <StyledColLogo xs={0} sm={0} md={3} lg={3} onClick={onEnlipsiumClick}>
            <img
              src="https://via.placeholder.com/150x40?text=Site+Logo"
              alt="Enlipsium logo"
            />
          </StyledColLogo>
          <Col xs={24} sm={24} md={15} lg={15}>
            <StyledUL>
              <Menu selectedKeys={[routerOption]} mode="horizontal">
                <Home key="/">
                  <Link href="/">Home</Link>
                </Home>
                <SubMenu key="products" title="Products">
                  <Menu.ItemGroup title="Nanoparticles">
                    <Menu.Item key="UCNPs">
                      Upconverting Nanoparticles (UCNPs)
                    </Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Quantum Dots">
                    <Menu.Item key="perovskitenanocrystals">
                      CsPbX3 Perovskite Nanocrystals
                    </Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="/scintillator">
                  <Link href="/scintillator">Scintillator</Link>
                </Menu.Item>
                <Menu.Item key="/contact">
                  <Link href="/contact">Contact Us</Link>
                </Menu.Item>
              </Menu>
            </StyledUL>
          </Col>
          <StyledCol xs={0} sm={0} md={3} lg={3}></StyledCol>
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
