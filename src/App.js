import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  body {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
class App extends React.Component {
  render() {
    return (
      <>
        <Global />
        <div>
          <Wrapper>
            <Title>Hello World!</Title>
          </Wrapper>
        </div>
      </>
    );
  }
}
export default App;
