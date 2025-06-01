import { Meta, StoryObj } from "@storybook/react-vite";

const Page = () => {
  return <div>Page</div>;
};

export default {
  title: "Page",
  component: Page,
} as Meta<typeof Page>;

export const Default: StoryObj<typeof Page> = {
  render: () => <Page />,
};
