import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  align-content: stretch;
`;

export const Button = styled.button`
  padding: 0 0px 15px 0px;
  background: #ccc;
  flex-basis: 10%;
  border: none;
  cursor: pointer;
`;

export const Label = styled.div`
  padding: 10px;
  font-size: 12px;
  background: #999;
`;
