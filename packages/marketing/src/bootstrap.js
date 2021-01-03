import React from 'react';
import { render } from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }
    render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
}
if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#_marketing-dev-root');

  if (element) {
    mount(element, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }