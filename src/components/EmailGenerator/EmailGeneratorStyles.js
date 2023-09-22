import styled from "styled-components";

export const LiSubject = styled.li`
border-bottom: 3px solid #C3D0E2;
  width: 100%;
  margin: 0;
  padding: 1rem 0; 
  text-align: center;
  cursor: pointer;
  border-top: ${(props) => (props.index === 0 ? "3px solid #C3D0E2" : "none")};
  &:hover {
    background-color: #C3D0E2; 
  }
`;