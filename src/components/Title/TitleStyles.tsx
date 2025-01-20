import styled from 'styled-components';

export const TitleStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin-top: 70px;
  margin-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 50px;

  .title-line {
    width: 200px;
    height: 5px;
    background-color: #000;
    margin-top: 20px;
  }

  @media (max-width: 1800px) {
    font-size: 44px;

    .title-line {
      height: 3px;
      margin-top: 14px;
    }
  }

  @media (max-width: 1500px) {
    font-size: 38px;

    .title-line {
      height: 3px;
      margin-top: 12px;
    }
  }

  @media (max-width: 1300px) {
    font-size: 32px;
    margin-top: 50px;
    margin-bottom: 24px;

    .title-line {
      width: 110px;
      height: 3px;
      margin-top: 10px;
    }
  }

  @media (max-width: 900px) {
    font-size: 28px;
    margin-top: 30px;
    margin-bottom: 16px;

    .title-line {
      width: 100px;
      height: 2px;
      margin-top: 8px;
    }
  }

  @media (max-width: 500px) {
    font-size: 25px;
    margin-top: 22px;
    margin-bottom: 14px;

    .title-line {
      width: 90px;
      height: 2px;
      margin-top: 8px;
    }
  }
`;
