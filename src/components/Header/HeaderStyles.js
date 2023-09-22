import styled from "styled-components";

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const Icons1 = styled.a`
  display: flex;
  gap: 1rem;
  width: 80px;
  height: 80px;
  margin: 0 0 0 2rem;
  cursor: pointer;
`;
export const Icons2 = styled.a`
  display: flex;
  gap: 1rem;
  width: 80px;
  height: 80px;
  margin: 0 0 0 2rem;
  cursor: pointer;
`;

export const Span1 = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  color: #007bff;
  line-height: 1.2;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

export const Span2 = styled.span`
  font-size: 1.5rem;

  font-weight: 500;
  letter-spacing: 2px;
  line-height: 1.2;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  margin-right: 1rem;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
