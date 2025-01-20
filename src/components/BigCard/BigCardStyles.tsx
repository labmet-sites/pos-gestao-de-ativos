import styled from 'styled-components';
import bgImage from '../../assets/pexels-pok-rie.jpg';

export const BigCardStyles = styled.div`
  * {
    font-family: 'Montserrat', sans-serif;
  }

  .left-card {
    width: max-content;
    height: max-content;
    h2 {
      font-size: 46px;
      font-weight: 700;
      margin-bottom: 8px;
      margin-top: 10px;
      color: #fff;
    }

    h3 {
      font-size: 46px;
      font-weight: 400;
      font-style: italic;
      margin-bottom: 12px;
      color: #fff;
    }

    h4 {
      font-size: 28px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 100px;
    }

    .pos-title {
      display: flex;
      width: max-content;
      color: #fff;
      margin-bottom: 80px;
      h5 {
        font-size: 68px;
        font-weight: 300;
        margin-right: 30px;
      }

      h6 {
        font-size: 75px;
        font-weight: 900;
        letter-spacing: 5px;
      }
    }

    .more-button {
      color: #09152f;
      background-color: #f4f4f4;
      border: none;
      font-size: 20px;
      font-weight: 900;
      box-sizing: border-box;
      padding: 20px 30px 20px 30px;
      border-radius: 16px;
    }
  }

  width: 96%;
  height: max-content;
  background-color: antiquewhite;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  padding: 20px 20px 20px 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .right-card {
    width: 500px;
    height: max-content;
    background-color: #f4f4f4;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 10px;
    padding: 18px;
    color: #09152f;

    .cart-title {
      font-size: 23px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .cart-response {
      font-size: 21px;
      margin-bottom: 34px;
      line-height: 30px;
      text-align: justify;
      text-indent: 40px;
    }
  }
`;
