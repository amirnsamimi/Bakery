import styled from "@emotion/styled";

const input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 40px;
  font-size: 1rem;
  padding: 15px 20px;
  &: @media (min-width: 900px) {
    height: 48px;
  }
`;

export const PrimaryInput = styled(input)`
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.fontColor};
`;
