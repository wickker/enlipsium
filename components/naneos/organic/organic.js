import { Row, Col } from 'antd';
import { COLORS } from '../../../utils/constants';
import {
  TitleCol,
  Title,
  Tagline,
  EmptyCol,
  DetailsName,
  Details,
  Container,
} from './styles';

const Organic = () => {
  return (
    <Row align='middle'>
      <TitleCol span={24}>
        <Title>Products</Title>
        <Tagline>Technologies > Naneos > Organic</Tagline>
      </TitleCol>
      <Container xs={24} sm={24} md={12} lg={12}>
        <img
          src='../../organic.webp'
          alt='Organic'
          style={{ width: '100%', borderRadius: '15%' }}
        />
      </Container>
      <Container
        xs={24}
        sm={24}
        md={12}
        lg={12}
        style={{ paddingBottom: '30px ' }}
      >
        <DetailsName>Organic</DetailsName>
        <Details>
          Enlipsium’s organic scintillators uses our proprietary Persistent
          Luminescence Nanoparticle (PLnP). This class of scintillators has an
          extremely long persistence time, along with electron trap stability,
          such that emission occurs only under thermal/ optical stimulations.
        </Details>
        <br />
        <Details>
          PLnP scintillators are thus able to 'store' the incident X-ray
          radiation within the film, and the emission can be 'released' at the
          appropriate time and conditions. Furthermore, the organic matrix
          allows these scintillators to be fully flexible and conformable to
          non-planar surfaces.
        </Details>
        <br />
        <Details style={{ fontStyle: 'italic' }}>
          Please{' '}
          <strong>
            <a
              style={{ color: `${COLORS.RED}` }}
              href='mailto:ttham@enlipsium.com'
            >
              contact us
            </a>
          </strong>{' '}
          for quotation/ more information on our products.
        </Details>
      </Container>
      {/* <EmptyCol span={24} /> */}
    </Row>
  );
};

export default Organic;
