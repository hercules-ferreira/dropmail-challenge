import styled, { css, keyframes } from "styled-components";

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  gap: 0.5rem;
`;

const rotateBorder = keyframes`
  0% {
    border: 10px solid #6495ED;
  }
  100% {
    border: 0px solid white;
  }
`;

export const CircleButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1rem;
  background-color: #1e90ff; /* Cor de fundo azul claro do cronometro regressivo*/
  color: white; 
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  ${({ stopRotation }) =>
    !stopRotation &&
    css`
      animation: ${rotateBorder} 3s linear infinite;
    `}
`;
