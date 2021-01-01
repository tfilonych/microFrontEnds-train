import React from 'react';
import { render } from 'react-dom';
import App from './App';

const mount = (el) => {
    render(<App />, el);
}
if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#_marketing-dev-root');

  if (element) {
    mount(element)
  }
}

export { mount }