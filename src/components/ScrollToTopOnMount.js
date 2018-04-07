import React, { PureComponent, Component } from 'react';

export default class ScrollToTopOnMount extends PureComponent<PropType> {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
  
    render() {
      return null
    }
  }