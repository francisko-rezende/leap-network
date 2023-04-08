import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "CodeLeap Network/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    upperCase: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    children: "Button",
  },
};

export const Delete: Story = {
  args: {
    intent: "delete",
    children: "Button",
  },
};

export const Save: Story = {
  args: {
    intent: "save",
    children: "Button",
  },
};
