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
  font-family: "Karla", sans-serif;
  padding: 0; 
  margin: 0;
}
`;

// --------------------------------
// --------------------------------
// ---------HEADER STYLES----------
// --------------------------------
// --------------------------------

const HeaderRow = styled(Row)`
  && {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background-color: white;
    border-bottom: 1px solid ${Constants.border};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderDummyCol = styled(Col)`
  && {
    padding-left: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const HeaderLogoCol = styled(HeaderDummyCol)`
  && {
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const HeaderMenuCol = styled(Col)`
  && {
    font-family: "Karla", sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 991px) {
      justify-content: center;
    }
    @media (max-width: 365px) {
      font-size: 14px;
    }
  }
`;

const HeaderMenuDropdown = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: none;
  .ant-menu {
    text-align: center;
    color: ${Constants.semiBlack};
    border: none;
    font-size: 16px;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 365px) {
    .ant-menu {
      font-size: 14px;
    }
  }
`;

const HeaderMenuItemCol = styled(Col)`
  && {
    padding: 0 20px;
    font-size: 16px;
    a {
      color: ${Constants.semiBlack};
      height: 100%;
      display: flex;
      align-items: center;
    }
    a:hover {
      cursor: pointer;
      color: ${Constants.marine};
      border-bottom: solid 2px ${Constants.marine};
    }
    @media (max-width: 445px) {
      padding: 0 8px;
    }
    @media (max-width: 365px) {
      font-size: 14px;
    }
  }
`;

const marineBorderBottom = `solid 2px ${Constants.marine}`;

const HeaderMenuItemColHome = styled(HeaderMenuItemCol)`
  && {
    display: none;
    a {
      color: ${(props) =>
        props.option === "/" ? Constants.marine : Constants.semiBlack};
      border-bottom: ${(props) =>
        props.option === "/" ? marineBorderBottom : "none"};
    }
    @media (max-width: 991px) {
      display: inline-block;
    }
  }
`;

const HeaderMenuItemColScint = styled(HeaderMenuItemCol)`
  && {
    a {
      color: ${(props) =>
        props.option === "/scintillator"
          ? Constants.marine
          : Constants.semiBlack};
      border-bottom: ${(props) =>
        props.option === "/scintillator" ? marineBorderBottom : "none"};
    }
  }
`;

const HeaderMenuItemColContact = styled(HeaderMenuItemCol)`
  && {
    a {
      color: ${(props) =>
        props.option === "/contact" ? Constants.marine : Constants.semiBlack};
      border-bottom: ${(props) =>
        props.option === "/contact" ? marineBorderBottom : "none"};
    }
  }
`;

// --------------------------------
// --------------------------------
// ---------FOOTER STYLES----------
// --------------------------------
// --------------------------------

const FooterDummyCol = styled(Col)`
  && {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;

const FooterCopyrightText = styled(FooterDummyCol)`
  && {
    justify-content: flex-end;
    padding-left: 30px;
    @media (max-width: 400px) {
      font-size: 13px;
    }
  }
`;

const FooterIcons = styled(FooterDummyCol)`
  && {
    justify-content: flex-start;
  }
`;

const FooterRow = styled(Row)`
  && {
    height: 100%;
  }
`;

const FooterStyled = styled(Footer)`
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

const FooterFontAwesomeIcon = styled(FontAwesomeIcon)`
  && {
    min-height: 2em;
    min-width: 2em;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

// --------------------------------
// --------------------------------
// ---------CONTENT STYLES---------
// --------------------------------
// --------------------------------

const StyledContent = styled(Content)`
  && {
    background-color: white;
    padding-top: 50px;
  }
`;

const { SubMenu } = Menu;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [dropdownFontSize, setDropdownFontSize] = React.useState(16);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const calcInnerWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", calcInnerWidth);
  }

  useEffect(() => {
    if (windowWidth <= 365) {
      setDropdownFontSize(14);
    } else {
      setDropdownFontSize(16);
    }
  }, [windowWidth]);

  console.log("Pathname: ", router.pathname);

  const onLogoClick = () => {
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
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Layout>
        <HeaderRow>
          <HeaderDummyCol xs={0} sm={0} md={3} lg={3}></HeaderDummyCol>
          <HeaderLogoCol xs={0} sm={0} md={3} lg={3} onClick={onLogoClick}>
            <img
              src="https://via.placeholder.com/180x40/0000FF/FFFFFF?Text=LOGO"
              alt="Enlipsium logo"
            />
          </HeaderLogoCol>
          <HeaderMenuCol xs={24} sm={24} md={15} lg={15}>
            <Row>
              <HeaderMenuItemColHome option={router.pathname}>
                <Link href="/">Home</Link>
              </HeaderMenuItemColHome>
              <HeaderMenuItemCol>
                <HeaderMenuDropdown>
                  <Link href="/products">
                    <Menu mode="horizontal">
                      <SubMenu title="Products">
                        <Menu.ItemGroup
                          title={
                            <span style={{ fontSize: dropdownFontSize }}>
                              Nanoparticles
                            </span>
                          }
                        >
                          <Menu.Item style={{ fontSize: dropdownFontSize }}>
                            Upconverting Nanoparticles (UCNPs)
                          </Menu.Item>
                        </Menu.ItemGroup>
                      </SubMenu>
                    </Menu>
                  </Link>
                </HeaderMenuDropdown>
              </HeaderMenuItemCol>
              <HeaderMenuItemColScint option={router.pathname}>
                <Link href="/scintillator">Scintillator</Link>
              </HeaderMenuItemColScint>
              <HeaderMenuItemColContact option={router.pathname}>
                <Link href="/contact">Contact Us</Link>
              </HeaderMenuItemColContact>
            </Row>
          </HeaderMenuCol>
          <HeaderDummyCol xs={0} sm={0} md={3} lg={3}></HeaderDummyCol>
        </HeaderRow>
        <StyledContent>
          <Component {...pageProps} />
        </StyledContent>
        <FooterStyled>
          <FooterRow>
            <FooterCopyrightText xs={11} sm={11} md={8} lg={8}>
              © 2020 Enlipsium All Rights Reserved
            </FooterCopyrightText>
            <FooterDummyCol xs={2} sm={2} md={8} lg={8}></FooterDummyCol>
            <FooterIcons xs={11} sm={11} md={8} lg={8}>
              <FooterFontAwesomeIcon icon={faFacebookSquare} />
              <FooterFontAwesomeIcon icon={faTwitterSquare} />
              <FooterFontAwesomeIcon icon={faInstagramSquare} />
            </FooterIcons>
          </FooterRow>
        </FooterStyled>
      </Layout>
    </div>
  );
}
