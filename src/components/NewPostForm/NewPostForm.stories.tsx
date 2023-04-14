import type { Meta, StoryObj } from "@storybook/react";
import { NewPostForm } from "./NewPostForm";

const meta: Meta<typeof NewPostForm> = {
  title: "CodeLeap Network/Molecules/NewPostForm",
  component: NewPostForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewPostForm>;

export const Default: Story = {};
