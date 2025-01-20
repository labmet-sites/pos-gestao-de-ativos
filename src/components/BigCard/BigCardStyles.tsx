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
      transition: 300ms;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        background-color: #09152f;
        color: #f4f4f4;
        scale: 1.1;
      }
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

  @media (max-width: 1850px) {
    .left-card {
      h2 {
        font-size: 38px;
        margin-bottom: 6px;
        margin-top: 8px;
      }

      h3 {
        font-size: 38px;
        margin-bottom: 8px;
      }

      h4 {
        font-size: 20px;
        margin-bottom: 90px;
      }

      .pos-title {
        margin-bottom: 70px;
        h5 {
          font-size: 54px;
          margin-right: 20px;
        }

        h6 {
          font-size: 66px;
          letter-spacing: 4px;
        }
      }

      .more-button {
        font-size: 16px;
        padding: 14px 28px 14px 28px;
        border-radius: 12px;
      }
    }

    .right-card {
      width: 480px;
      margin-left: 40px;

      .cart-title {
        font-size: 20px;
        letter-spacing: 1px;
        margin-bottom: 6px;
      }

      .cart-response {
        font-size: 18px;
        margin-bottom: 26px;
        line-height: 26px;
        text-indent: 32px;
      }
    }
  }

  @media (max-width: 1610px) {
    .left-card {
      .pos-title {
        margin-bottom: 60px;
        h5 {
          font-size: 46px;
          margin-right: 12px;
        }

        h6 {
          font-size: 56px;
          letter-spacing: 3px;
        }
      }

      .more-button {
        font-size: 15px;
        border-radius: 10px;
      }
    }

    .right-card {
      margin-left: 20px;

      .cart-title {
        font-size: 16px;
        letter-spacing: 0.4px;
        margin-bottom: 4px;
      }

      .cart-response {
        font-size: 14px;
        margin-bottom: 18px;
        line-height: 22px;
        text-indent: 22px;
      }
    }
  }

  @media (max-width: 1320px) {
    width: 96%;
    margin-bottom: 400px;
    justify-content: center;
    padding: 30px;
    .left-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      * {
        display: flex;
        justify-content: center;
      }

      h4 {
        margin-bottom: 40px;
      }
      .pos-title {
        margin-bottom: 60px;
        h5 {
          display: none;
        }

        h6 {
          text-align: center;
        }
      }

      .more-button {
        font-size: 15px;
        border-radius: 10px;
        width: 220px;
      }
    }

    .right-card {
      width: 96%;
      position: absolute;
      background-color: #09152f;
      color: #f4f4f4;
      top: 104%;
      margin: 0px;
      left: 50%;
      transform: translateX(-50%);
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      .cart-response {
        text-align: center;
        text-indent: 0px;
      }
    }
  }

  @media (max-width: 780px) {
    width: 97%;
    .left-card {
      h2 {
        font-size: 30px;
      }

      h3 {
        font-size: 30px;
      }

      h4 {
        font-size: 14px;
        margin-bottom: 40px;
      }
      .pos-title {
        margin-bottom: 50px;

        h6 {
          font-size: 40px;
        }
      }

      .more-button {
        font-size: 13px;
        border-radius: 8px;
        padding: 0px;
        width: 190px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .right-card {
      width: 93%;
      .cart-title {
        font-size: 13px;
      }
      .cart-response {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 570px) {
    .left-card {
      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 20px;
      }

      h4 {
        font-size: 12px;
        margin-bottom: 30px;
      }
      .pos-title {
        margin-bottom: 30px;

        h6 {
          font-size: 28px;
        }
      }

      .more-button {
        font-size: 11px;
        border-radius: 8px;
        width: 150px;
        height: 34px;
      }
    }

    .right-card {
      width: 93%;
      .cart-title {
        font-size: 13px;
      }
      .cart-response {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 425px) {
    padding: 16px;
    .left-card {
      width: 99%;
      h2 {
        font-size: 18px;
      }

      h3 {
        font-size: 18px;
      }

      h4 {
        font-size: 10px;
        margin-bottom: 24px;
        text-align: center;
      }
      .pos-title {
        h6 {
          font-size: 24px;
        }
      }

      .more-button {
        margin-bottom: 20px;
      }
    }

    .right-card {
      width: 90%;
      .cart-title {
        font-size: 11px;
      }
      .cart-response {
        font-size: 10px;
      }
    }
  }
`;
