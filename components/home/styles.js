import styled from 'styled-components';
import { Col, Row } from 'antd';
import { COLORS } from '../../utils/constants';

export const TitleLeftCol = styled(Col)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 120px;
    background-color: ${COLORS.DARK_GRAY};
    height: 75vh;
    @media only screen and (max-width: 570px) {
      padding: 0px 50px;
    }
    @media only screen and (max-width: 415px) {
      padding: 0px 30px;
    }
  }
`;

export const Title1 = styled.div`
   {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    font-size: 18px;
    margin-bottom: 50px;
    font-weight: 600;
    color: ${COLORS.LIGHTEST_GRAY};
    @media only screen and (max-width: 415px) {
      font-size: 16px;
    }
  }
`;

export const Title2 = styled(Title1)`
  && {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 0px;
    color: white;
    @media only screen and (max-width: 415px) {
      font-size: 30px;
    }
  }
`;

export const Title3 = styled.div`
   {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-top: 50px;
    color: ${COLORS.LIGHTEST_GRAY};
    text-align: justify;
    @media only screen and (max-width: 415px) {
      font-size: 16px;
    }
  }
`;

export const ProductLine = styled.div`
   {
    font-size: 30px;
    color: ${COLORS.DARK_GRAY};
    padding: 0px 120px;
    text-align: center;
    margin-top: 50px;
    @media only screen and (max-width: 570px) {
      padding: 0px 50px;
    }
    @media only screen and (max-width: 350px) {
      padding: 0px 30px;
    }
  }
`;

export const CardRow = styled(Row)`
  && {
    padding: 0px 100px;
    @media only screen and (max-width: 570px) {
      padding: 0px 50px;
    }
    @media only screen and (max-width: 350px) {
      padding: 0px 30px;
    }
  }
`;

export const CardCol = styled(Col)`
  && {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const CardTitle = styled.div`
   {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const CardDescription = styled.div`
   {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${COLORS.GRAY};
    text-align: center;
  }
`;

export const TeamTitle = styled.div`
   {
    font-size: 50px;
    width: 100%;
    background-color: ${COLORS.DARK_GRAY};
    text-align: center;
    color: ${COLORS.ORANGE};
    padding: 50px 30px 10px 30px;
  }
`;

export const TeamTagline = styled.div`
   {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background-color: ${COLORS.DARK_GRAY};
    text-align: center;
    color: ${COLORS.LIGHTEST_GRAY};
    padding: 0px 30px 20px 30px;
  }
`;

export const TeamRow = styled(Row)`
  && {
    padding: 0px 10px 50px 10px;
    background-color: ${COLORS.DARK_GRAY};
  }
`;

export const TeamName = styled.div`
   {
    font-size: 16px;
    color: white;
    text-align: center;
    margin-top: -10px;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const TeamPosition = styled.div`
   {
    font-size: 16px;
    color: ${COLORS.LIGHT_GRAY};
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
  }
`;

export const ContactLine1 = styled.div`
   {
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    text-align: center;
    color: ${COLORS.DARK_GRAY};
    padding: 50px 30px 0px 30px;
  }
`;

export const ContactLine2 = styled(ContactLine1)`
  && {
    color: ${COLORS.LIGHT_GRAY};
    font-style: italic;
    padding: 0px 30px;
  }
`;

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;

// const ContactTitle1 = styled(Col)`
//   && {
//     font-size: 40px;
//     color: ${Constants.gray};
//     text-align: center;
//     font-family: "Montserrat", sans-serif;
//   }
// `;

// const ContactTitle2 = styled(Col)`
//   && {
//     font-size: 40px;
//     color: ${Constants.lightGray};
//     text-transform: uppercase;
//     font-style: italic;
//     text-align: center;
//     margin-bottom: 10px;
//     font-family: "Montserrat", sans-serif;
//   }
// `;

// const TitleText = styled(Col)`
//   && {
//     color: ${Constants.marine};
//     font-size: 85px;
//     text-align: center;
//     text-transform: uppercase;
//     font-weight: 500;
//     line-height: 1.2;
//     margin-bottom: 10px;
//     @media only screen and (max-width: 991px) {
//       font-size: 75px;
//     }
//     @media only screen and (max-width: 575px) {
//       font-size: 55px;
//     }
//     @media only screen and (max-width: 400px) {
//       font-size: 50px;
//     }
//   }
// `;

// const TitleTagline = styled(Col)`
//   && {
//     color: ${Constants.gray};
//     font-size: 20px;
//     text-align: center;
//     font-family: "Montserrat", sans-serif;
//     @media only screen and (max-width: 991px) {
//       font-size: 18px;
//     }
//     @media only screen and (max-width: 575px) {
//       font-size: 16px;
//     }
//     @media only screen and (max-width: 400px) {
//       font-size: 15px;
//     }
//   }
// `;

// // --------------------------------
// // --------------------------------
// // ----------DESCRIPTION-----------
// // --------------------------------
// // --------------------------------

// const DescriptionRow = styled(Row)`
//   && {
//     margin: 60px 30px;
//   }
// `;

// const DescriptionImageCol = styled(Col)`
//   && {
//     padding-right: 30px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     @media only screen and (max-width: 991px) {
//       padding-right: 0px;
//     }
//   }
// `;

// const DescriptionImage = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: cover;
//   border-radius: 25% 10%;
// `;

// const DescriptionTextCol = styled(Col)`
//   && {
//     padding-left: 30px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     @media only screen and (max-width: 991px) {
//       padding-left: 0px;
//       padding-top: 30px;
//       text-align: center;
//   }
// `;

// const DescriptionTextTitle = styled(Col)`
//   && {
//     color: ${Constants.gray};
//     font-size: 50px;
//     line-height: 1.3;
//     margin-bottom: 30px;
//     @media only screen and (max-width: 340px) {
//       font-size: 40px;
//     }
//   }
// `;

// const DescriptionText = styled(Col)`
//   && {
//     color: ${Constants.darkGray};
//     white-space: pre-line;
//     line-height: 1.6;
//     font-size: 16px;
//     font-family: "Montserrat", sans-serif;
//     @media only screen and (max-width: 340px) {
//       font-size: 14px;
//       padding: 0 10px;
//     }
//   }
// `;

// // --------------------------------
// // --------------------------------
// // -------------ABOUT--------------
// // --------------------------------
// // --------------------------------

// const AboutCol = styled(Col)`
//   && {
//     background-color: ${Constants.lightestGray};
//     display: flex;
//     align-items: center;
//     padding: 60px 30px 30px 30px;
//     justify-content: center;
//   }
// `;

// const AboutTitle = styled(Col)`
//   && {
//     font-size: 50px;
//     color: ${Constants.marine};
//     text-align: center;
//     margin-bottom: 5px;
//   }
// `;

// const AboutTagline = styled(Col)`
//   && {
//     color: ${Constants.lightGray};
//     font-family: "Montserrat", sans-serif;
//     font-size: 18px;
//     text-align: center;
//     margin-bottom: 30px;
//   }
// `;

// const AboutAvatarCol = styled(Col)`
//   && {
//     padding: 0 20px 30px 20px;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//   }
// `;

// const AboutAvatar = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: cover;
//   border-radius: 50%;
// `;

// const AboutStaffName = styled.div`
//   font-family: "Montserrat", sans-serif;
//   text-align: center;
//   color: ${Constants.darkGray};
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 20px;
// `;

// const AboutStaffPosition = styled.div`
//   font-family: "Montserrat", sans-serif;
//   text-align: center;
//   color: ${Constants.gray};
//   font-size: 16px;
//   font-style: italic;
// `;

// // --------------------------------
// // --------------------------------
// // -------------CONTACT------------
// // --------------------------------
// // --------------------------------

// const ContactCol = styled(Col)`
//   && {
//     padding: 60px 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// const ContactTitle1 = styled(Col)`
//   && {
//     font-size: 40px;
//     color: ${Constants.gray};
//     text-align: center;
//     font-family: "Montserrat", sans-serif;
//   }
// `;

// const ContactTitle2 = styled(Col)`
//   && {
//     font-size: 40px;
//     color: ${Constants.lightGray};
//     text-transform: uppercase;
//     font-style: italic;
//     text-align: center;
//     margin-bottom: 10px;
//     font-family: "Montserrat", sans-serif;
//   }
// `;

// const ContactButtonCol = styled(Col)`
//   && {
//     text-align: center;
//   }
// `;
