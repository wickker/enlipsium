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

const DummyCol = styled(Col)`
  && {
    padding-left: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const LogoCol = styled(DummyCol)`
  && {
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const MenuCol = styled(Col)`
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

const MenuItemCol = styled(Col)`
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

const HomeMenuItemCol = styled(MenuItemCol)`
  && {
    display: none;
    @media (max-width: 991px) {
      display: inline-block;
    }
  }
`;

const MenuDropdown = styled.ul`
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

// FOOTER STYLES

const FooterDummyCol = styled(Col)`
  && {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;

const CopyrightText = styled(FooterDummyCol)`
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

const { SubMenu } = Menu;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [routerOption, setRouterOption] = React.useState(router.pathname);
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

  useEffect(() => {
    setRouterOption(router.pathname);
  }, [router.pathname]);

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
          <DummyCol xs={0} sm={0} md={3} lg={3}></DummyCol>
          <LogoCol xs={0} sm={0} md={3} lg={3} onClick={onLogoClick}>
            <img
              src="https://via.placeholder.com/180x40/0000FF/FFFFFF?Text=LOGO"
              alt="Enlipsium logo"
            />
          </LogoCol>
          <MenuCol xs={24} sm={24} md={15} lg={15}>
            <Row>
              <HomeMenuItemCol>
                <Link href="/scintillator">Home</Link>
              </HomeMenuItemCol>
              <MenuItemCol>
                <MenuDropdown>
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
                </MenuDropdown>
              </MenuItemCol>
              <MenuItemCol>
                <Link href="/scintillator">Scintillator</Link>
              </MenuItemCol>
              <MenuItemCol>
                <Link href="/contact">Contact Us</Link>
              </MenuItemCol>
            </Row>
          </MenuCol>
          <DummyCol xs={0} sm={0} md={3} lg={3}></DummyCol>
        </HeaderRow>
        <StyledContent>
          <Component {...pageProps} />
        </StyledContent>
        <StyledFooter>
          <FooterRow>
            <CopyrightText xs={11} sm={11} md={8} lg={8}>
              © 2020 Enlipsium All Rights Reserved
            </CopyrightText>
            <FooterDummyCol xs={2} sm={2} md={8} lg={8}></FooterDummyCol>
            <FooterIcons xs={11} sm={11} md={8} lg={8}>
              <StyledFontAwesomeIcon icon={faFacebookSquare} />
              <StyledFontAwesomeIcon icon={faTwitterSquare} />
              <StyledFontAwesomeIcon icon={faInstagramSquare} />
            </FooterIcons>
          </FooterRow>
        </StyledFooter>
      </Layout>
    </div>
  );
}
