import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "CodeLeap Network/Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Delete: Story = {
  args: {
    intent: "delete",
    hiddenTextDescription: "Delete post",
  },
};

export const Edit: Story = {
  args: {
    intent: "edit",
    hiddenTextDescription: "Edit post",
  },
};
