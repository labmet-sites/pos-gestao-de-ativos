import styled from 'styled-components';
import bgImage from '../../assets/pexels-pok-rie.jpg';

export const BigCardStyles = styled.div`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  width: 96%;
  height: max-content;
  background-color: antiquewhite;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  padding: 14px;
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
