import type { Meta, StoryObj } from "@storybook/react";
import { SignupForm } from "./SignupForm";

const meta: Meta<typeof SignupForm> = {
  title: "CodeLeap Network/Molecules/SignupForm",
  component: SignupForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {};
