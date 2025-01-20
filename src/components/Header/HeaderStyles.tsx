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
  margin-bottom: 30px;

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
`;
