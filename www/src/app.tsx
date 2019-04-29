import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Cookie from 'js-cookie';
import { defaultParams } from './constants';
import Container from './Container';

function start (document): void {
  const def = Object.assign({}, defaultParams, Cookie.getJSON('default') || {});

  ReactDOM.render(
    <Container {...def} />,
    document.getElementById('app'),
  );
}

start(document);
