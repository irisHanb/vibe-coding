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
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          fill="currentColor"
        />
      </svg>
    ),
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

