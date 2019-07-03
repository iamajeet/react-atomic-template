import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '../src/index.scss';
import theme from '../src/components/themes/default';

setAddon(JSXAddon);
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </BrowserRouter>
));

configure(loadStories, module);
