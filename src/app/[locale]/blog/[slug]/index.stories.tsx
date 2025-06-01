import type { Meta, StoryObj } from "@storybook/react-vite";
import { BlogPostTemplate } from ".";

export default {
  component: BlogPostTemplate,
} satisfies Meta<typeof BlogPostTemplate>;

export const Default: StoryObj<typeof BlogPostTemplate> = {
  args: {
    content: "Hello, world!",
    data: {
      title: "Hello, world!",
    },
  },
};
