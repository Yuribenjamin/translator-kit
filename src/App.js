import React from 'react';
import Website from './Components/landingpage/Website';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#FFFFFF',
    secondry: '#1DA1F2',
    background: '#15202B',
    other: '#80919F'
  }
};

const Global = createGlobalStyle`
  body {
    font-family: 'Merriweather', serif;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }
  h1, h2, h3, h4, h5, h6, p {
    font-family: 'Merriweather', serif;
    margin: 0;
    color: ${props => props.theme.colors.primary};
  }
  a {
    font-family: 'Merriweather', serif;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.secondry};
    text-transform: uppercase;
  }
  a:hover, a:focus {
    text-decoration: none;
    color: ${props => props.theme.colors.secondry};
    background-color: ${props => props.theme.colors.primary};
  }
  a img{
	border: none 0px;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Global />
          <Website />
        </ThemeProvider>
      </>
    );
  }
}
export default App;
