import React from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from '../../../components';

storiesOf('Slider', module)
  .addWithJSX('default', () => <Slider />)
  .addWithJSX('reverse', () => (
    <Slider reverse min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .addWithJSX('disabled', () => (
    <Slider disabled min={0} max={10} step={0.05} defaultValue={5} />
  ))
  .addWithJSX('responsive with breakpoint', () => (
    <Slider
      responsive
      min={0}
      max={10}
      step={0.05}
      defaultValue={5}
      breakpoint={450}
    />
  ));
