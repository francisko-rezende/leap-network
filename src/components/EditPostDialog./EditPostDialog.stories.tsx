import type { Meta, StoryObj } from "@storybook/react";
import { EditPostDialog } from "./EditPostDialog";

const meta: Meta<typeof EditPostDialog> = {
  title: "CodeLeap Network/Atoms/EditPostDialog",
  component: EditPostDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditPostDialog>;

export const Default: Story = {};
