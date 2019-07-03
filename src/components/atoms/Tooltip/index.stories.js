import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '.';

storiesOf('Tooltip', module)
  .addWithJSX('default', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .addWithJSX('reverse', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello!" reverse>
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .addWithJSX('position right', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello" position="right">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .addWithJSX('position bottom', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello" position="bottom">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .addWithJSX('position left', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello" position="left">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .addWithJSX('align start', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello! How are you?" align="start">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ))
  .addWithJSX('align end', () => (
    <div style={{ margin: 100 }}>
      <Tooltip data-title="Hello! How are you?" align="end">
        <a href="#foo">Hover me</a>
      </Tooltip>
    </div>
  ));
