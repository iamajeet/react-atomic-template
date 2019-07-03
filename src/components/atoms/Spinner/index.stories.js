import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from '.';

storiesOf('Spinner', module)
  .addWithJSX('default', () => <Spinner />)
  .addWithJSX('reverse', () => <Spinner reverse />)
  .addWithJSX('another palette', () => <Spinner palette="secondary" />);
