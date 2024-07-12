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



 const FilterRadio = styled.span`
  width: 10px;
  height: 10px;
    
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioFilterFaker = styled(FilterRadio)`
    width: 10px;
    height:10px;
  opacity:0;
  border-right: 10px solid ${(props) => props.theme.colors.lightGray}; 
  border-left: 10px solid ${(props) => props.theme.colors.lightGray}; 
  border-bottom: 10px solid ${(props) => props.theme.colors.lightGray}; 
  border-top: 10px solid ${(props) => props.theme.colors.primary}; 
`;


export const TextNormalInput = styled.input`
  direction: rtl;
  padding: 10px 12px;
  border-radius: 10px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.line};
`



export const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  outline: none;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.line};
  resize: none;
  min-height: 150px;
`