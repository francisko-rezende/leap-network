import type { Meta, StoryObj } from "@storybook/react";
import { DeletePostDialog } from "./DeletePostDialog";

const meta: Meta<typeof DeletePostDialog> = {
  title: "CodeLeap Network/Atoms/DeletePostDialog",
  component: DeletePostDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DeletePostDialog>;

export const Default: Story = {};
