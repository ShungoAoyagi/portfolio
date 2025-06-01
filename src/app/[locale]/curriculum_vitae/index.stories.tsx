import { Meta, StoryObj } from "@storybook/react-vite";
import { CurriculumVitaeTemplate } from ".";

export default {
  component: CurriculumVitaeTemplate,
} as Meta<typeof CurriculumVitaeTemplate>;

export const Default: StoryObj<typeof CurriculumVitaeTemplate> = {
  render: () => <CurriculumVitaeTemplate />,
};
