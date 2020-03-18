import React from 'react';
import PropTypes from 'prop-types';
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
const Wrapper = styled.section`
  height: 100vh;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  color: red;
  margin: 0;
  padding: 0;
`;

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { isError: true };
  }

  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? (
      <>
        {' '}
        <Global />{' '}
        <Wrapper>
          <Heading>Something Went Wrong Check The Console</Heading>
        </Wrapper>{' '}
      </>
    ) : (
      children
    );
  }
}
