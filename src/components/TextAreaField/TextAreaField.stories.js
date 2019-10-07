import React from 'react';

import { storiesOf } from '@storybook/react';
import { TextAreaField } from '../../';

storiesOf('Components/TextAreaField', module)
  .add('default', () => (
    <TextAreaField label="Area" input={{ name: 'input', value: 'value', onChange: () => null }} />
  ))
  .add('without value', () => (
    <TextAreaField label="Area" input={{ name: 'input', onChange: () => null }} />
  ))
  .add('with placeholder', () => (
    <TextAreaField label="Area" input={{ name: 'input', onChange: () => null }} placeholder="placeholder" />
  ))
  .add('with disabled', () => (
    <TextAreaField label="Area" input={{ name: 'input', onChange: () => null }} placeholder="placeholder" disabled />
  ))
  .add('with error', () => (
    <TextAreaField label="Area" input={{ name: 'input', onChange: () => null }} meta={{ error: 'Required', touched: true }} placeholder="placeholder" />
  ));


