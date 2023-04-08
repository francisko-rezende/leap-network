import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "CodeLeap Network/Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    hasBorder: {
      control: "boolean",
    },
    hasTitle: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card",
  },
};
