import { Meta, StoryObj } from "@storybook/react-vite";
import { CurriculumVitaeTemplate } from ".";

export default {
  title: "CurriculumVitae",
  component: CurriculumVitaeTemplate,
} as Meta<typeof CurriculumVitaeTemplate>;

export const Default: StoryObj<typeof CurriculumVitaeTemplate> = {
  render: () => <CurriculumVitaeTemplate />,
};
