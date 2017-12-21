import React from 'react';
import { render } from 'react-dom';
import TestComponent from './testcomponent';

render(
  <TestComponent headline="Test Headline" count={1234} showCount />,
  document.querySelector('#react-app'),
);
