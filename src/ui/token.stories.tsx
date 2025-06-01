import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Design/Tokens",
} satisfies Meta;

export const Colors: StoryObj = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      {["primary", "secondary", "bg", "fg"].map((c) => (
        <div key={c} className={`h-16 bg-${c} rounded`}></div>
      ))}
    </div>
  ),
};
