import { Row } from 'antd';
import { COLORS } from '../../../utils/constants';
import {
  TitleCol,
  Title,
  Tagline,
  DetailsName,
  Details,
  EmptyCol,
} from './styles';

const Nanoperovskite = () => {
  return (
    <Row align='middle'>
      <TitleCol span={24}>
        <Title>Products</Title>
        <Tagline>Technologies > Naneos > Nano Perovskite</Tagline>
      </TitleCol>
      <div style={{ padding: '30px' }}>
        <DetailsName>Nano Perovskite</DetailsName>
        <Details>
          Enlipsium is one of the first companies in the world to have
          successfully taken X-ray images with high resolution using
          Nano-scintillators. Making use of the properties of nano sized
          perovskite crystals, our scintillators are able to achieve ultra-high
          speed imaging with decay time as little as 44.6ns and resolutions of
          up to 3.2ln/mm!
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
        <img
          style={{ width: '100%', marginTop: '30px' }}
          src='../../nano-perovskite.webp'
          alt='Nano Perovskite'
        />
      </div>
      {/* <EmptyCol span={24} /> */}
    </Row>
  );
};

export default Nanoperovskite;
