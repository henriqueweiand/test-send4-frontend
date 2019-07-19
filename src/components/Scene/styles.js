import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  align-content: stretch;
  border-bottom: 5px solid green;
  transition: background-color .3s linear;
  ${(props) => {
    if (props.type === undefined) {
      return 'background: transparent;';
    }
    return (props.type ? 'background: yellow;' : 'background: black;');
  }}
`;
