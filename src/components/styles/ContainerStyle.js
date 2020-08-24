import styled from "@emotion/styled";
import { css } from "@emotion/core";

const ContainerStyle = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin-left: 10%;
  width: 80%;
  h1 {
    font-size: 3.375rem;
  }

  ${(props) =>
    props.hero &&
    css`
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
    `}
`;

export default ContainerStyle;
