import styled from "@emotion/styled";

const input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 40px;
  outline: none;
  font-size: 1rem;
  padding: 15px 20px;
  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const SecondaryInput = styled(input)`
  border: 1px solid
    ${(props) => (props.collapse ? "none" : props.theme.colors.line)};
  background-color: ${(props) =>
    props.collapse ? "none" : props.theme.colors.lightGray};
  color: ${(props) => (props.collapse ? "none" : props.theme.colors.fontColor)};
`;
