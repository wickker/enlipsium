import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Logo } from './Styles';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { ROUTES_KEYS } from '../../../utils/constants';

const { SubMenu } = Menu;

const NavHeader = () => {
  const router = useRouter();
  const getInitialWindowWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
  };
  const [currentKey, setCurrentKey] = useState(router.pathname);
  const [windowWidth, setWindowWidth] = useState(getInitialWindowWidth());
  const [logoMargins, setLogoMargins] = useState({
    right: undefined,
    left: undefined,
  });

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  useEffect(() => {
    if (windowWidth) {
      setLogoMargins({
        right: calculateLogoMargins(windowWidth, 'right'),
        left: calculateLogoMargins(windowWidth, 'left'),
      });
    }
  }, [windowWidth]);

  const updateWindowWidth = () => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  };

  const handleClick = (e) => {
    setCurrentKey(get(e, 'key'));
    router.push(get(e, 'key'));
  };

  const calculateLogoMargins = (width, side) => {
    if (width > 1200) {
      if (side === 'right') {
        return width * 0.4;
      }
      return width * 0.15;
    } else if (width >= 700 && width <= 1200) {
      if (side === 'right') {
        return width * 0.3;
      }
      return width * 0.1;
    } else if (width < 700 && width >= 500) {
      if (side === 'right') {
        return width * 0.2;
      }
      return width * 0.05;
    } else {
      if (side === 'right') {
        return width * 0.2;
      }
      return 0;
    }
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[currentKey]}
      mode='horizontal'
      style={{ fontSize: '16px', color: 'black' }}
    >
      <Menu.Item
        key={`${ROUTES_KEYS.HOME}`}
        style={{
          borderBottom: 'none',
          marginRight: `${get(logoMargins, 'right')}px`,
          marginLeft: `${get(logoMargins, 'left')}px`,
        }}
      >
        <Logo src='enlipsium-logo.webp' alt='Enlipsium' />
      </Menu.Item>
      <SubMenu key={`${ROUTES_KEYS.TECHNOLOGIES}`} title='Technologies'>
        <Menu.ItemGroup>
          <Menu.Item
            key={`${ROUTES_KEYS.NANEOS}`}
            style={{
              marginLeft: '-12px',
              marginBottom: '-5px',
              letterSpacing: '1px',
            }}
          >
            NANEOS
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.UCNPS}`}
            style={{ marginBottom: '-5px' }}
          >
            Upconverting Nanoparticles (UCNPs)
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.NANO_PEROVSKITE}`}
            style={{ marginBottom: '-5px' }}
          >
            Nano Perovskite
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.ORGANIC}`}
            style={{ marginBottom: '-5px' }}
          >
            Organic
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.POLYIPNOS}`}
            style={{
              marginLeft: '-12px',
              marginBottom: '-5px',
              letterSpacing: '1px',
            }}
          >
            POLYIPNOS
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.GLOW_PARTICLES}`}
            style={{ marginBottom: '-5px' }}
          >
            Glow Particles
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.BLACK_INKS}`}
            style={{ marginBottom: '-5px' }}
          >
            Black Inks
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.ENLIT}`}
            style={{
              marginLeft: '-12px',
              marginBottom: '-5px',
              letterSpacing: '1px',
            }}
          >
            ENLIT
          </Menu.Item>
          <Menu.Item
            key={`${ROUTES_KEYS.ANTI_DUST_COATINGS}`}
            style={{ marginBottom: '-5px' }}
          >
            Anti-Dust Coatings
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key={`${ROUTES_KEYS.CONTACT_US}`}>Contact Us</Menu.Item>
      <Menu.Item key={`${ROUTES_KEYS.ABOUT}`}>About</Menu.Item>
    </Menu>
  );
};

export default NavHeader;
