import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "CodeLeap Network/Molecules/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Page: Story = {
  args: {
    intent: "page",
    children: "page",
  },
};

export const Post: Story = {
  args: {
    intent: "post",
    children: "post",
  },
};
