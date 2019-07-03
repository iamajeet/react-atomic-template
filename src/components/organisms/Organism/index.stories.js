import React from 'react';
import { storiesOf } from '@storybook/react';
import { Organism } from '../../../components';

storiesOf('Organism', module)
  .addWithJSX('default', () => <Organism />)
  .addWithJSX('reverse', () => <Organism reverse />);
