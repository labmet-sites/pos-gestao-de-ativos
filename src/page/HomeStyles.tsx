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

    @media (max-width: 1600px) {
      height: 300px;
      box-sizing: border-box;
      padding: 0px 20px 0px 20px;
      margin-top: 70px;
      margin-bottom: 10px;

      .small-card {
        width: 49%;
        padding: 22px 38px 22px 38px;

        .small-card-title,
        .small-card-name {
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .small-card-title {
          font-size: 28px;
        }

        .small-card-name {
          font-size: 22px;
          margin-bottom: 40px;
        }

        .small-card-info {
          margin-top: 12px;

          .small-info-left {
            font-size: 20px;

            strong {
              font-size: 19px;
              margin-left: 8px;
            }
          }

          .small-info-right {
            font-size: 19px;
            margin-left: 8px;
            line-height: 26px;
          }
        }
      }
    }

    @media (max-width: 1600px) {
      height: 250px;
      padding: 0px 12px 0px 12px;
      margin-top: 80px;
      margin-bottom: 8px;

      .small-card {
        padding: 18px 32px 18px 32px;

        .small-card-title,
        .small-card-name {
          margin-bottom: 6px;
          letter-spacing: 0.4px;
        }

        .small-card-title {
          font-size: 22px;
        }

        .small-card-name {
          font-size: 18px;
          margin-bottom: 30px;
        }

        .small-card-info {
          margin-top: 10px;

          .small-info-left {
            font-size: 18px;

            strong {
              font-size: 17px;
              margin-left: 6px;
            }
          }

          .small-info-right {
            font-size: 17px;
            margin-left: 6px;
            line-height: 20px;
          }
        }
      }
    }

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: max-content;

      .small-card {
        width: 480px;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 500px) {
      .small-card {
        padding: 14px 28px 14px 28px;
        width: 100%;

        .small-card-title,
        .small-card-name {
          margin-bottom: 5px;
          letter-spacing: 0px;
        }

        .small-card-title {
          font-size: 17px;
        }

        .small-card-name {
          font-size: 15px;
          margin-bottom: 14px;
        }

        .small-card-info {
          margin-top: 6px;

          .small-info-left {
            font-size: 14px;

            strong {
              font-size: 13px;
              margin-left: 4px;
            }
          }

          .small-info-right {
            font-size: 13px;
            margin-left: 4px;
            line-height: 14px;
          }
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

    @media (max-width: 1700px) {
      font-size: 22px;
      letter-spacing: 1px;
      line-height: 32px;
    }

    @media (max-width: 1150px) {
      font-size: 20px;
      letter-spacing: 0.8px;
      line-height: 32px;
    }

    @media (max-width: 800px) {
      font-size: 18px;
      letter-spacing: 0.6px;
      line-height: 30px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
      letter-spacing: 0.4px;
      line-height: 24px;
    }
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

        @media (max-width: 1700px) {
          font-size: 22px;
        }

        @media (max-width: 1150px) {
          font-size: 20px;
        }

        @media (max-width: 800px) {
          font-size: 18px;
        }

        @media (max-width: 600px) {
          font-size: 14px;
        }
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

        @media (max-width: 1100px) {
          margin-left: 8px;
          .lattes-img {
            width: 22px;
          }
        }
      }

      @media (max-width: 900px) {
        margin-bottom: 14px;
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

    @media (max-width: 1700px) {
      padding: 32px 46px 32px 46px;
      border-radius: 52px;
      margin-bottom: 34px;

      .level-title {
        font-size: 26px;
        margin-bottom: 28px;
      }

      .discipline {
        font-size: 26px;
        margin-left: 50px;
      }
    }

    @media (max-width: 1350px) {
      border-radius: 44px;

      .level-title {
        font-size: 22px;
        margin-bottom: 24px;
      }

      .discipline {
        font-size: 21px;
        margin-left: 40px;
      }
    }

    @media (max-width: 1000px) {
      border-radius: 34px;

      .level-title {
        font-size: 18px;
        margin-bottom: 18px;
      }

      .discipline {
        font-size: 17px;
        margin-left: 26px;
      }
    }

    @media (max-width: 800px) {
      border-radius: 28px;
      .level-title {
        font-size: 16px;
        margin-bottom: 14px;
      }

      .discipline {
        font-size: 14px;
        margin-left: 18px;
      }
    }

    @media (max-width: 680px) {
      border-radius: 20px;
      padding: 24px 28px 24px 28px;

      .level-title {
        font-size: 14px;
        margin-bottom: 12px;
      }

      .discipline {
        font-size: 12px;
        margin-left: 14px;
      }
    }

    @media (max-width: 550px) {
      .level-title {
        font-size: 13px;
      }

      .discipline {
        font-size: 11px;
        margin-left: 8px;
      }
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

    @media (max-width: 1300px) {
      height: 300px;
      margin-top: 120px;
      img {
        width: 100px;
      }

      p {
        font-size: 26px;
      }
    }

    @media (max-width: 800px) {
      height: 200px;
      margin-top: 90px;
      img {
        width: 70px;
      }

      p {
        font-size: 20px;
      }
    }

    @media (max-width: 550px) {
      height: 150px;
      margin-top: 60px;
      img {
        width: 50px;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
      }
    }

    @media (max-width: 550px) {
      p {
        font-size: 13px;
      }
    }
  }

  .under-text {
    text-align: center;
  }

  .form-subscribe {
    margin-top: 40px;
    width: 460px;
    height: 76px;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 29px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #09152f;
    color: #f4f4f4;
    transition: 300ms;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      scale: 1.06;
    }

    @media (max-width: 1700px) {
      width: 400px;
      height: 68px;
      border-radius: 14px;
      font-size: 26px;
    }

    @media (max-width: 900px) {
      width: 350px;
      height: 54px;
      border-radius: 10px;
      font-size: 21px;
    }

    @media (max-width: 400px) {
      width: 300px;
      height: 48px;
      border-radius: 8px;
      font-size: 18px;
    }
  }
`;
