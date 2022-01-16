import React, { useState } from 'react';
import { Row } from 'antd';
import { get } from 'lodash';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  TitleCol,
  Title,
  Tagline,
  Image,
  LeftCol,
  RightCol,
  ProductTitle,
  FontAwesomeIcon,
  ProductItem,
  ProductSpan,
  PreviewImageCol,
  ProductItem2,
  FullSizeImageDiv,
  FullSizeImage,
} from './styles';

const uv = {
  title: 'UV Glow Particles',
  list: [
    'Particles that light up under UV irradiation',
    'Red, green and blue emissions',
    'High heat stability',
    'Can be blended into polymers, metals or inks',
  ],
  packSize: '1g, 5g, 25g',
  wavelengths: '270nm, 365nm',
  path: '/glow-particles/uv.webp',
  name: 'uv',
};

const ir = {
  title: 'IR Glow Particles',
  list: [
    'Particles that light up under NIR irradiation',
    'Red, green and blue emissions',
    'High heat stability',
    'Can be blended into polymers, metals or inks',
  ],
  packSize: '1g, 5g, 25g',
  wavelengths: '808nm, 980nm',
  path: '/glow-particles/ir.webp',
  name: 'ir',
};

const custom = {
  title: 'Customized Blends',
  list: [
    'For special requirements where particles need to light up under more than 1 wavelength',
    'Red, green or blue emissions',
    'High heat stability',
    'Can be blended into polymers, metals or inks',
  ],
  packSize: '1g, 5g, 25g',
  wavelengths: 'Please contact us',
  path: '/glow-particles/custom.webp',
  name: 'custom',
};

const GlowParticles = () => {
  const [product, setProduct] = useState(uv);

  const generateList = (list) => {
    return list.map((el) => {
      return (
        <ProductItem>
          <FontAwesomeIcon icon={faCheck} />
          {el}
        </ProductItem>
      );
    });
  };

  const handleClickProductImage = (e) => {
    console.log(e.target.src);
    const source = get(e, 'target.src').toLowerCase();
    if (source.includes('uv')) {
      setProduct(uv);
    } else if (source.includes('ir')) {
      setProduct(ir);
    } else if (source.includes('custom')) {
      setProduct(custom);
    }
  };

  return (
    <Row align='top' style={{ minHeight: '94vh', maxWidth: '1980px' }}>
      <TitleCol span={24}>
        <Title>Products</Title>
        <Tagline>Technologies > Polyipnos > Glow Particles</Tagline>
      </TitleCol>
      <LeftCol xs={24} sm={12} md={12} lg={12}>
        <FullSizeImageDiv>
          <FullSizeImage
            src={get(product, 'path')}
            alt='Glow Particle Product'
          />
        </FullSizeImageDiv>
        <Row gutter={[16, 0]}>
          <PreviewImageCol
            xs={24}
            sm={8}
            md={8}
            lg={8}
            id='uv'
            selected={get(product, 'name')}
            onClick={handleClickProductImage}
          >
            <Image src={get(uv, 'path')} alt='UV Glow Particles' />
          </PreviewImageCol>
          <PreviewImageCol
            xs={24}
            sm={8}
            md={8}
            lg={8}
            id='ir'
            selected={get(product, 'name')}
            onClick={handleClickProductImage}
          >
            <Image src={get(ir, 'path')} alt='IR Glow Particles' />
          </PreviewImageCol>
          <PreviewImageCol
            xs={24}
            sm={8}
            md={8}
            lg={8}
            id='custom'
            selected={get(product, 'name')}
            onClick={handleClickProductImage}
          >
            <Image src={get(custom, 'path')} alt='Cutomized Blends' />
          </PreviewImageCol>
        </Row>
      </LeftCol>
      <RightCol xs={24} sm={12} md={12} lg={12}>
        <ProductTitle>{get(product, 'title')}</ProductTitle>
        {generateList(get(product, 'list'))}
        <ProductItem2 style={{ marginTop: '40px' }}>
          <ProductSpan>Available Pack Size:</ProductSpan>
          {get(product, 'packSize')}
        </ProductItem2>
        <ProductItem2 style={{ marginBottom: '30px' }}>
          <ProductSpan>Available Absorption Wavelengths:</ProductSpan>
          {get(product, 'wavelengths')}
        </ProductItem2>
      </RightCol>
    </Row>
  );
};

export default GlowParticles;
