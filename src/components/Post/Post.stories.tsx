import type { Meta, StoryObj } from "@storybook/react";
import { Post } from "./Post";

const meta: Meta<typeof Post> = {
  title: "CodeLeap Network/Molecules/Post",
  component: Post,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    title: "My first post at codeleap network",
    content:
      "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. aecenas egestas arcu quis ligula",
    username: "Victor",
    created_datetime: String(new Date()),
  },
};
