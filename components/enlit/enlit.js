import { Row, Col } from 'antd';
import { COLORS } from '../../utils/constants';
import { ImageCol, LogoImg, Tagline } from './styles';

const Enlit = () => {
  return (
    <Row align='top'>
      <ImageCol span={24}>
        <LogoImg src='enlit-logo-gimped.png' alt='Polyipnos Logo' />
        <Tagline>Cleaner Than Clean</Tagline>
      </ImageCol>
    </Row>  
  );
};

export default Enlit;
