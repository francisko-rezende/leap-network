import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "CodeLeap Network/Atoms/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {};
