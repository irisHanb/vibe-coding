import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./index";

const meta = {
  title: "Commons/Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Input variant style",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Input size",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "Theme mode",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    readOnly: {
      control: "boolean",
      description: "Read-only state",
    },
    type: {
      control: "text",
      description: "Input type",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
    showSearchIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
    disabled: true,
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "dark",
    placeholder: "검색어를 입력해 주세요.",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const AllVariantsLight: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input
        variant="primary"
        size="medium"
        theme="light"
        placeholder="Primary variant"
      />
      <Input
        variant="secondary"
        size="medium"
        theme="light"
        placeholder="Secondary variant"
      />
      <Input
        variant="tertiary"
        size="medium"
        theme="light"
        placeholder="Tertiary variant"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input
        variant="primary"
        size="small"
        theme="light"
        placeholder="Small size"
      />
      <Input
        variant="primary"
        size="medium"
        theme="light"
        placeholder="Medium size"
      />
      <Input
        variant="primary"
        size="large"
        theme="light"
        placeholder="Large size"
      />
    </div>
  ),
};
