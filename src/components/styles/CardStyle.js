import styled from "@emotion/styled";

const CardStyle = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  .content {
    display: flex;
    flex-flow: column;
    border-radius: 0.5em;
    max-height: 350px;
    grid-column: 1 / 6;
    grid-row: 1 / 1;
    background: ${({ theme }) => theme.cardPri};
    padding: 2em;

    h2 {
      margin-top: 1rem;
      font-size: 2.25rem;
    }
    p {
      margin-top: 2.25rem;
      width: 60%;
    }
    a {
      align-self: center;
      color: #fff;
    }

    .links {
      display: flex;
      margin-top: 2.25rem;
      text-align: center;
      a {
        margin: 0;
        margin-right: 1rem;
        font-size: 1.2rem;
        &:hover {
          color: #00ebc7;
          path {
            fill: #00ebc7;
          }
        }
      }
    }
    .icons {
      display: flex;
      align-self: flex-end;
      justify-self: flex-end;
      align-items: center;
      margin-top: 1rem;
      svg {
        width: 1.5rem;
        margin-left: 1rem;
      }
    }
  }
  .preview {
    border-radius: 0.5em;
    grid-column: 5 / 8;
    grid-row: 1 / 1;
    margin: 2rem 0;
    height: 250px;
    .overlay {
      background: ${({ theme }) => theme.cardSec};
      opacity: 0.8;
      border-radius: inherit;
      width: inherit;
      height: inherit;
      cursor: pointer;
      &:hover {
        opacity: 0.2;
      }
    }
  }

  .portfolio {
    background: url("/images/portfolio.png") no-repeat center center/cover;
  }

  .bot {
    background: url("/images/bot.jpg") no-repeat center center/cover;
  }

  .rude-wallet {
    background: url("/images/rude-wallet.png") no-repeat center center/cover;
  }

  .werecat {
    background: url("/images/werecat.png") no-repeat center center/cover;
  }

  .tic-tac-toe {
    background: url("/images/tic-tac-toe.png") no-repeat center center/cover;
  }

  .icon {
    width: 1.2rem;
    margin-left: 0.5rem;
  }

  @media all and (max-width: 414px) {
    margin-top: 2rem;

    .content {
      grid-column: 1 / 9;

      h2 {
        margin-top: 0;
        font-size: 1.5rem;
      }

      p {
        font-size: 0.85rem;
        margin-top: 1.25rem;
        width: 100%;
      }
      .icons {
        display: none;
      }
      .icon {
        width: 1rem;
      }
      .links {
        margin-top: 1.5rem;
        text-align: center;
        a {
          font-size: 1rem;
        }
      }
    }

    .preview {
      display: none;
    }
  }
`;

export default CardStyle;
