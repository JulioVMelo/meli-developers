import styled from 'styled-components';
import bgHero from '../../assets/images/background-computador.jpeg';
import partner from '../../assets/images/partner.jpeg';

export const Hero = styled.section`
  background-color: #fff159;
  height: 516px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .call-to-action {
    h1 {
      font-size: 44px;
      font-weight: 300;
      margin-bottom: 20px;
    }
    p {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 32px;
    }
  }

  .background {
    background-image: url(${bgHero});
    width: 612px;
    height: 438px;
    background-size: cover;
    position: absolute;
    margin-left: 340px;
    bottom: -48px;
  }
`;

export const Partner = styled.section`
  background-color: #f5f5f5;
  padding: 65px 0;

  .program {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 44px;
    padding: 0 42px;
    font-size: 20px;

    .wrapperImage {
      width: 166px;
      /* margin-right: 42px; */
    }

    strong {
      font-weight: 600;
    }
  }
`;

export const Store = styled.section`
  padding: 150px 0;
  display: flex;
  justify-content: center;

  .box {
    background-color: #f5f5f5;
    padding: 35px 30px;
    max-width: 500px;
    border-radius: 6px;
    position: relative;
    margin-right: 30px;
    p {
      font-size: 22px;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    a {
      font-size: 16px;
      color: #0084fe;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(${partner}) no-repeat;
      z-index: -1;
      left: 41px;
      top: 27px;
      background-position: 100% 100%;
    }
  }

  .wrapperImage {
    width: 323px;
    align-self: flex-start;
    margin-top: -50px;
  }
`;
