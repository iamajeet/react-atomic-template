import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .addWithJSX('default', () => <Button>Hello</Button>)
  .addWithJSX('reverse', () => <Button reverse>Hello</Button>)
  .addWithJSX('another palette', () => <Button palette="success">Hello</Button>)
  .addWithJSX('disabled', () => <Button disabled>Hello</Button>)
  .addWithJSX('transparent', () => <Button transparent>Hello</Button>)
  .addWithJSX('height', () => <Button height={100}>Hello</Button>)
  .addWithJSX('link', () => (
    <Button href="https://github.com/mlprajapati/react-atomic-bootstrap">
      react-atomic-bootstrap
    </Button>
  ));
