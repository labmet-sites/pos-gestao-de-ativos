import styled from 'styled-components';

export const HomeStyles = styled.section`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: max-content;

  .small-cards {
    width: 100%;
    height: 350px;
    box-sizing: border-box;
    padding: 0px 30px 0px 30px;
    margin-top: 90px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .small-card {
      width: 48%;
      height: 100%;
      background-color: #e3e3e3;
      border-radius: 14px;
      box-sizing: border-box;
      padding: 26px 40px 26px 40px;
      font-family: 'Montserrat', sans-serif;
      color: #444444;

      .small-card-title,
      .small-card-name {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        letter-spacing: 1.2px;
      }

      .small-card-title {
        font-size: 32px;
        font-weight: 700;
      }

      .small-card-name {
        font-size: 25px;
        font-weight: 300;
        margin-bottom: 50px;
      }

      .small-card-info {
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;

        .small-info-left {
          font-size: 24px;
          font-weight: 700;

          strong {
            font-weight: 300;
            font-size: 23px;
            margin-left: 10px;
          }
        }

        .small-info-right {
          font-weight: 300;
          font-size: 23px;
          margin-left: 10px;
          line-height: 30px;
        }
      }
    }
  }

  .about-text {
    width: 90%;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    text-align: center;
    letter-spacing: 1.2px;
    font-weight: 400;
    line-height: 40px;
  }

  .professors {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;

    .professor-li {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 30px;
      transition: 300ms;

      .professor-name {
        font-size: 30px;
        font-weight: 400;
        transition: 300ms;
      }

      .lattes-link {
        margin-left: 20px;
        width: max-content;
        height: max-content;
        padding: 3px;
        border-radius: 10px;
        .lattes-img {
          width: 30px;
          transition: 300ms;

          &:hover {
            cursor: pointer;
            scale: 1.3;
          }
        }
      }
    }
  }

  .div-1 {
    background-color: #304574;
  }
  .div-2 {
    background-color: #1d2d51;
  }
  .div-3 {
    background-color: #09152f;
  }

  .disciplines {
    width: 94%;
    height: max-content;
    box-sizing: border-box;
    padding: 40px 50px 40px 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: 'Montserrat', sans-serif;
    border-radius: 60px;
    margin-bottom: 40px;

    .level-title {
      font-size: 34px;
      color: #fff;
      font-weight: 600;
      margin-bottom: 30px;
    }

    .discipline {
      font-size: 30px;
      color: #fff;
      font-weight: 600;
      margin-bottom: 12px;
      margin-left: 60px;
    }
  }

  footer {
    width: 100%;
    height: 350px;
    background-color: #a2a2a2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 200px;

    img {
      width: 130px;
      margin-bottom: 20px;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 30px;
      font-weight: 700;
      color: #444444;
    }
  }
`;
