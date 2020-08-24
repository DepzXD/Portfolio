import styled from "@emotion/styled";

const ButtonStyle = styled.a`
  background: none;
  border: 3px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.8rem;
  font-weight: 600;
  max-width: 10rem;

  @media all and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export default ButtonStyle;
