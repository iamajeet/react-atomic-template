import React from 'react';
import { storiesOf } from '@storybook/react';
import PreformattedText from '.';

storiesOf('PreformattedText', module)
  .addWithJSX('default', () => (
    <PreformattedText>
      git clone https://github.com/diegohaz/arc
    </PreformattedText>
  ))
  .addWithJSX('reverse', () => (
    <PreformattedText reverse>
      git clone https://github.com/diegohaz/arc
    </PreformattedText>
  ))
  .addWithJSX('block', () => (
    <PreformattedText block>
      git clone https://github.com/diegohaz/arc
    </PreformattedText>
  ))
  .addWithJSX('block reverse', () => (
    <PreformattedText block reverse>
      git clone https://github.com/diegohaz/arc
    </PreformattedText>
  ));
