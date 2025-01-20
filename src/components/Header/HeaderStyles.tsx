import styled from 'styled-components';

export const HeaderStyles = styled.header`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #000;
  padding: 30px 0px 30px 0px;
  box-sizing: border-box;
  font-family: 'Montserrat Alternates', serif;
  position: relative;

  .ufcg-title {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: 1.2px;
  }

  .sub {
    font-size: 37px;
    font-weight: 400;
  }

  .ufcg-link {
    width: max-content;
    height: 74%;
    position: absolute;
    left: 40px;
    .ufcg-logo {
      height: 100%;
      transition: 300ms;

      &:hover {
        scale: 1.04;
      }
    }
  }

  @media (max-width: 1420px) {
    .ufcg-title {
      font-size: 30px;
      letter-spacing: 1px;
    }

    .sub {
      font-size: 28px;
    }

    .ufcg-link {
      height: 70%;
    }
  }

  @media (max-width: 1220px) {
    .ufcg-title {
      font-size: 24px;
      letter-spacing: 0.6px;
    }

    .sub {
      font-size: 22px;
    }

    .ufcg-link {
      height: 64%;
    }
  }

  @media (max-width: 860px) {
    .ufcg-title {
      font-size: 20px;
      letter-spacing: 0.6px;
    }

    .sub {
      font-size: 18px;
    }
  }

  @media (max-width: 860px) {
    margin-top: 50px;
    .ufcg-title {
      font-size: 18px;
      letter-spacing: 0.2px;
    }
    .sub {
      font-size: 16px;
    }

    .ufcg-link {
      height: 60px;
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translate(-50%);
    }
  }

  @media (max-width: 500px) {
    margin-top: 60px;
    padding: 10px 0px 10px 0px;
    .ufcg-title {
      font-size: 15px;
      margin-bottom: 2px;
    }
    .sub {
      font-size: 13px;
    }

    .ufcg-link {
      height: 50px;
    }
  }
`;
