import { Col } from 'antd';
import { COLORS } from '../../../utils/constants';
import styled from 'styled-components';

export const TitleCol = styled(Col)`
  && {
    padding: 30px;
    height: 50vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-size: 70px;
  margin-bottom: 20px;
  width: 100%;
  color: ${COLORS.RED};
  text-transform: uppercase;
  text-align: center;
`;

export const Tagline = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 18px;
`;

export const DetailsName = styled(Col)`
  && {
    font-size: 50px;
    line-height: 1.3;
    color: ${COLORS.RED};
    margin-bottom: 20px;
    @media (max-width: 400px) {
      font-size: 40px;
    }
  }
`;

export const Details = styled(Col)`
  && {
    font-size: 16px;
    color: ${COLORS.SEMI_BLACK};
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;


// const TitleColStyled = styled(Col)`
//   && {
//     padding: 30px;
//     height: 50vh;
//     background-color: ${Constants.darkGray};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const TitleProductCol = styled(Col)`
//   && {
//     text-align: center;
//     color: white;
//     font-size: 70px;
//     margin-bottom: 20px;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     @media (max-width: 400px) {
//       font-size: 50px;
//     }
//   }
// `;

// const TitleProductDetailCol = styled(Col)`
//   && {
//     text-align: center;
//     font-family: 'Montserrat', sans-serif;
//     color: white;
//     font-size: 18px;
//     @media (max-width: 400px) {
//       font-size: 16px;
//     }
//   }
// `;

// const InfoColStyled = styled(Col)`
//   && {
//     padding: 30px;
//   }
// `;

// const ImageCol = styled(Col)`
//   && {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const ImageStyled = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// `;

// const DetailsName = styled(Col)`
//   && {
//     font-size: 50px;
//     line-height: 1.3;
//     color: ${Constants.gray};
//     margin-bottom: 20px;
//     @media (max-width: 400px) {
//       font-size: 40px;
//     }
//   }
// `;

// const Details = styled(Col)`
//   && {
//     font-size: 16px;
//     color: ${Constants.semiBlack};
//     font-family: 'Montserrat', sans-serif;
//     white-space: pre-line;
//     @media (max-width: 400px) {
//       font-size: 15px;
//     }
//   }
// `;

// const DetailsContact = styled(Col)`
//   && {
//     font-size: 16px;
//     color: ${Constants.semiBlack};
//     font-family: 'Montserrat', sans-serif;
//     font-style: italic;
//     margin-top: 20px;
//     margin-bottom: 30px;
//     @media (max-width: 400px) {
//       font-size: 15px;
//     }
//   }
// `;