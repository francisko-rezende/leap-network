import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "CodeLeap Network/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Dark: Story = {
  args: {
    intent: "dark",
    tag: "h1",
    children: "Title",
  },
};

export const Light: Story = {
  args: {
    intent: "light",
    tag: "h1",
    children: "Title",
  },
};
