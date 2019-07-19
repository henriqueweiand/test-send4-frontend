import styled, { css } from 'styled-components';

const theming = {
  day: {
    border: '2px solid #000',
    boxShadow: '#fdfd96',
  },
  night: {
    border: '2px solid #000',
    boxShadow: '#fff000',
  },
};

export const Label = styled.div`
  background: #ddd;
  text-align: center;
  font-weight:bold;
  font-size:12px;
  padding: 3px;
`;

export const Container = styled.div`
  border: ${props => css`${theming[props.theme.type].border}`};
  box-shadow: ${props => props.lighting && `0 0 1em ${theming[props.theme.type].boxShadow}`};
  color: #000;
  flex-basis: 30%;
  background: #fafafa;
  margin: 5%;
  cursor: pointer;
`;
