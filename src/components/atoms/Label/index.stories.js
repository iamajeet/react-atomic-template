import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '.';

storiesOf('Label', module)
  .addWithJSX('default', () => <Label>Hello</Label>)
  .addWithJSX('reverse', () => <Label reverse>Hello</Label>);
