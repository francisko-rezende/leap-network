import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "CodeLeap Network/Molecules/TextField",
  component: TextField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextInput: Story = {
  args: {
    tag: "input",
    label: "Please enter your username",
    placeholder: "John doe",
    id: "username",
  },
};

export const TextArea: Story = {
  args: {
    tag: "textarea",
    label: "Content",
    placeholder: "Content here",
    id: "content",
  },
};
