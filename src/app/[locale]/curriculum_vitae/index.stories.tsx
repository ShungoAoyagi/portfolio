import { Meta, StoryObj } from "@storybook/react-vite";
import { CurriculumVitaeLayout } from ".";

export default {
  title: "CurriculumVitae",
  component: CurriculumVitaeLayout,
} as Meta<typeof CurriculumVitaeLayout>;

export const Default: StoryObj<typeof CurriculumVitaeLayout> = {
  render: () => <CurriculumVitaeLayout />,
};
