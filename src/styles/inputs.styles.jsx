import styled from "@emotion/styled";

const input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 40px;
  outline: none;
  font-size: 1rem;
  padding: 15px 20px;
  display: ${(props) => props.collapse && "none"};
  @media (min-width: 768px) {
    height: 32px;
  }
`;

export const SecondaryInput = styled(input)`
  border: 1px solid
    ${(props) => (props.collapse ? "none" : props.theme.colors.line)};
  background-color: ${(props) =>
    props.collapse ? "none" : props.theme.colors.lightGray};
  color: ${(props) => (props.collapse ? "none" : props.theme.colors.fontColor)};
`;

const RadioFaker = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioPrimaryFaker = styled(RadioFaker)`
  border: ${(props) => props.theme.colors.line} solid 3px;
`;

export const RadioSecondaryFaker = styled(RadioFaker)`
  background-color: ${(props) => props.theme.colors.line};
`;
