import styled from "styled-components";

export const Container = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.span`
  margin-top: 3rem;
  font-size: 14px;
  color: var(--gray-400);
`;

export const InputNew = styled.span`
  display: flex;
  flex: grid;
  align-items: center;
  outline: none;
  height: auto;
  align-items: center;
  border-radius: 10px;
  background-color: var(--gray-100);
  position: relative;
  color: var(--gray-400);
  width: 100%;
  letter-spacing: 0.1rem;

  input {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: var(--gray-400);
    font-family: Poppins;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-left: none;
    border-top: none;
    border-bottom: none; 
    border-right: 1px solid var(--gray-200);
    background-color: transparent;
    width: 100%;
  letter-spacing: 0.1rem;
    
  }                 

  input:focus {
    outline: none;
    border-right: 1px solid var(--gray-200);
    box-shadow: 0 0 0 2px var(--transparent); 
  }

  img {
    cursor: pointer;
  }
`;

export const InputContent = styled.div`
  display: flex;
  margin-left: 0.8rem;
`;

export const CopyIcon = styled.div`
  display: flex;
  margin-right: 0.5rem;

  
`;

export const CopyIconText = styled.div`
  display: flex;
  align-items: center;
margin: 0 auto;

`;

export const RefreshContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const RefreshEmail = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin: 0 auto;
`;

export const RefreshText = styled.span`
  font-size: 14px;
  color: var(--gray-400);
  cursor: pointer;
`;

export const Alert = styled.span`
  font-size: 0.8rem;
  color: var(--red-500)
`;

// //
export const ButtonCheck = styled.button`
  background: var(--gray-100);
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;
  margin: 1rem 0.5rem 0.5rem 0;
  color: var(--dark-900);
  border: 1px solid var(--dark-100);
  transition: filter 0.2s;

  &[disabled] {
    cursor: not-allowed;
    svg {
      animation: animate 2s infinite;
    }
  }

  &:hover {
    background: var(--gray-400);
    border: none;
    border-radius: 8px;
    transform: scale(1.01); 
    filter: brightness(1.08);
  color: var(--white);

  }
`;

export const CopyText = styled.span`
  font-size: 0.8rem;
  color: var(--gray-400);
  cursor: pointer;
  margin-right: 1rem;


  color: ${(props) => (props.disabled ? "var(--gray300)" : "var(--gray400)")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
