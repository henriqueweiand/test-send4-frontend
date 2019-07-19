import styled from 'styled-components';

const theming = {
  day: {
    background: '#c9dbe9',
  },
  night: {
    background: '#788488',
  },
};

export const Container = styled.div`
  min-height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;

  border-bottom: 5px solid green;
  transition: background-color .3s linear;
  ${props => `
    background: -webkit-linear-gradient(top, ${theming[props.theme.type].background} 0%, #fff 100%);
    background: -linear-gradient(top, ${theming[props.theme.type].background} 0%, #fff 100%);
    background: -moz-linear-gradient(top, ${theming[props.theme.type].background} 0%, #fff 100%);
  `}

`;

export const Nuvem = styled.div`
  top: 50px;
  position: absolute;
  width: 200px; height: 60px;
  background: #fff;

  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;

  &:before, &:after {
    content: '';
    position: absolute;
    background: #fff;
    width: 100px; height: 80px;
    position: absolute; top: -15px; left: 10px;

    border-radius: 100px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;

    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -moz-transform: rotate(30deg);
  }

  &:after {
    width: 120px; height: 120px;
    top: -55px; left: auto; right: 15px;
  }

  ${(props) => {
    switch (props.type) {
      case 1:
        return `
          -webkit-animation: moveclouds 15s linear infinite;
          -moz-animation: moveclouds 15s linear infinite;
          -o-animation: moveclouds 15s linear infinite;
        `;
      case 2:
        return `
          left: 200px;
          top: 150px;

          -webkit-transform: scale(0.6);
          -moz-transform: scale(0.6);
          transform: scale(0.6);
          opacity: 0.6; /*opacity proportional to the size*/

          /*Speed will also be proportional to the size and opacity*/
          /*More the speed. Less the time in 's' = seconds*/
          -webkit-animation: moveclouds 25s linear infinite;
          -moz-animation: moveclouds 25s linear infinite;
          -o-animation: moveclouds 25s linear infinite;
        `;
      case 3:
        return `
          left: 200px;
          top: 150px;

          -webkit-transform: scale(0.6);
          -moz-transform: scale(0.6);
          transform: scale(0.6);
          opacity: 0.6; /*opacity proportional to the size*/

          /*Speed will also be proportional to the size and opacity*/
          /*More the speed. Less the time in 's' = seconds*/
          -webkit-animation: moveclouds 25s linear infinite;
          -moz-animation: moveclouds 25s linear infinite;
          -o-animation: moveclouds 25s linear infinite;
        `;
      case 4:
        return `
        left: 470px; top: -250px;

        -webkit-transform: scale(0.75);
        -moz-transform: scale(0.75);
        transform: scale(0.75);
        opacity: 0.75; /*opacity proportional to the size*/

        -webkit-animation: moveclouds 18s linear infinite;
        -moz-animation: moveclouds 18s linear infinite;
        -o-animation: moveclouds 18s linear infinite;
        `;
      default:
        return `
          -webkit-animation: moveclouds 15s linear infinite;
          -moz-animation: moveclouds 15s linear infinite;
          -o-animation: moveclouds 15s linear infinite;
        `;
    }
  }
}
`;
