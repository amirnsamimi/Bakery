import styled from "@emotion/styled";

const SolidButton = styled.button`
  border-radius: 12px;
  line-height: 15px;
  font-size: 10px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: max-content;
  padding: 5px 15px;
  min-width: 45px;
  border: none;
  cursor: pointer;
  transition: 500ms background;
  @media (min-width: 768px) {
    padding: 10px 20px;
    line-height: 25px;
    border-radius: 16px;
    font-size: 16px;
    height: 32px;
  }
`;

export const SubmitButton = styled(SolidButton)`
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 8px 8px 0px ${(props) => props.theme.colors.boxShadow};
  color: ${(props) => props.theme.colors.white};
`;

export const BlueButton = styled(SolidButton)`
  background-color: ${(props) => props.theme.colors.blueButton};
  box-shadow: 0px 8px 8px 0px ${(props) => props.theme.colors.boxShadow};
  color: ${(props) => props.theme.colors.primary};
`;

const RoundButton = styled.button`
  width: max-content;
  border-radius: 100px;
  padding: 4px;
  display: flex;
  height: max-content
  border: none;
  cursor: pointer;
  transition: 500ms background;
  
`;

export const RoundPrimaryButton = styled(RoundButton)`
  background-color: ${(props) => props.theme.colors.primary};
`;


