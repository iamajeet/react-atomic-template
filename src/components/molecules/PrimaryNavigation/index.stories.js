import React from 'react';
import { storiesOf } from '@storybook/react';
import { PrimaryNavigation } from '../../../components';

storiesOf('PrimaryNavigation', module)
  .addWithJSX('default', () => <PrimaryNavigation />)
  .addWithJSX('reverse', () => <PrimaryNavigation reverse />);
