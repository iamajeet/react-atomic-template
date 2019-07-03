import React from 'react';
import { storiesOf } from '@storybook/react';
import Caption from '.';

storiesOf('Caption', module)
  .addWithJSX('default', () => <Caption>Hello</Caption>)
  .addWithJSX('reverse', () => <Caption reverse>Hello</Caption>);
