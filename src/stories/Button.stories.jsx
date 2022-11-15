import { styled } from '@linaria/react';
import React from 'react';
import { within } from "@storybook/testing-library";

import { Button } from './Button';

const Wrapper = styled.div`
  background: fuchsia;
  `;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Wrapper>
      <Button {...args} />
    </Wrapper>
    )
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await expect(button).toBeInTheDocument();
};