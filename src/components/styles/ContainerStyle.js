import styled from "@emotion/styled";
import { css } from "@emotion/core";

const ContainerStyle = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-left: 10%;
  width: 80%;
  h1 {
    font-size: 3.375rem;
  }

  &.auto {
    padding-top: 5rem;
    height: 100%;
  }

  @media all and (max-width: 414px) {
    padding: 0 2rem;
    width: 100%;
    margin-left: 0;
    h1 {
      font-size: 2.25rem;
    }
  }
  ${(props) =>
    props.hero &&
    css`
      flex-flow: column wrap;
      margin-left: 5%;
      align-content: center;
      h1 {
        font-size: 7.594rem;
        line-height: 1.1;
      }
      h3 {
        font-size: 3.375rem;
        font-weight: 300;
        color: #898898;
      }

      @media all and (max-width: 414px) {
        margin-left: 0;
        h3 {
          font-size: 1.5rem;
        }
        h1 {
          font-size: 3rem;
        }
      }
    `}
`;

export default ContainerStyle;
