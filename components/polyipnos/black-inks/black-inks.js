import { Row } from 'antd';
import { get } from 'lodash';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  TitleCol,
  Title,
  Tagline,
  LayoutCol,
  ProductTitle,
  FontAwesomeIcon,
  ProductItem,
  ProductItem2,
  ProductSpan,
  StyledRow,
} from './styles';

const blackInk = {
  title: 'UV / IR Black Inks',
  list: [
    'Black inks that light up under UV, NIR or both',
    'Strong visible emissions',
    'Can be used on paper fabric and plastic surfaces',
    'Flexographic printing options available',
  ],
  packSize: '500ml, 1l, 5l',
  wavelengths:
    '270nm, 365nm, 808nm, 980nm or any combinations of the aforementioned',
};

const BlackInks = () => {
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

  return (
    <Row align='top' style={{ minHeight: '94vh', maxWidth: '1980px' }}>
      <TitleCol span={24}>
        <Title>Products</Title>
        <Tagline>Technologies > Polyipnos > Black Inks</Tagline>
      </TitleCol>
      <StyledRow align='space-between' justify='center'>
        <LayoutCol xs={24} sm={24} md={24} lg={8} video={true}>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/0U5SWCzvcWE'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </LayoutCol>
        <LayoutCol xs={24} sm={24} md={24} lg={8}>
          <ProductTitle>{get(blackInk, 'title')}</ProductTitle>
          {generateList(get(blackInk, 'list'))}
          <ProductItem2 style={{ marginTop: '40px' }}>
            <ProductSpan>Available Pack Size:</ProductSpan>
            {get(blackInk, 'packSize')}
          </ProductItem2>
          <ProductItem2>
            <ProductSpan>Available Absorption Wavelengths:</ProductSpan>
            {get(blackInk, 'wavelengths')}
          </ProductItem2>
        </LayoutCol>
        <LayoutCol xs={24} sm={24} md={24} lg={8} video={true}>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/DSnllBSvIH8'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </LayoutCol>
      </StyledRow>
    </Row>
  );
};

export default BlackInks;
