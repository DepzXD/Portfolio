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

export const SocialLinks = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  justify-content: center;
  align-items: center;

  .links {
    margin: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    svg {
      margin: 0 0.3rem;
      height: 1rem;
      &:hover path {
        fill: ${({ theme }) => theme.secondary};
      }
    }
  }
`;

export const Line = styled.div`
  border: 0.2px solid ${({ theme }) => theme.lightGray};
  width: 15rem;
  height: 0;
  border-radius: 20px;
`;

export default ContainerStyle;
