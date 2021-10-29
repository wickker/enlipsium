import styled from 'styled-components';
import { Col } from 'antd';
import { COLORS } from '../../utils/constants'

export const TitleCol = styled(Col)`
  && {
    background-color: ${COLORS.LIGHTEST_GRAY};
    height: 70vh;
    display: flex;
    align-items: center;
    padding: 0px 30px;
  }
`;

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