import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  parameters: { backgrounds: { default: 'dark' } }
};

export const Cancel = (): JSX.Element => <Button>Cancel</Button>;
