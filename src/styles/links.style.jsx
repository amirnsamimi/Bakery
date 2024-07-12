import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const TransLink = styled(Link)`
  border-radius: 6px;
  line-height: 15px;
  font-size: 10px;
  font-weight: 500;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: max-content;
  min-width: 90px;
  border: none;
  cursor: pointer;
  transition: 500ms background;
  @media (min-width: 768px) {
    line-height: 25px;
    border-radius: 16px;
    font-size: 16px;
    height: 32px;
  }
`;

export const TransPrimaryLink = styled(TransLink)`
  color: ${(props) => props.theme.colors.white};
`;
export const TransPrimaryLinkB = styled(TransLink)`
  color: ${(props) => props.theme.colors.fontColor};
`;