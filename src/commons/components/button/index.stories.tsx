import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./index";

const meta = {
  title: "Commons/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "버튼의 시각적 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼의 크기",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "버튼의 테마 (배경색에 따라 선택)",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 상태",
    },
    children: {
      control: "text",
      description: "버튼 내부 텍스트",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Variant Stories
export const PrimaryLight: Story = {
  args: {
    children: "일기쓰기",
    variant: "primary",
    size: "medium",
    theme: "light",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "일기쓰기",
    variant: "primary",
    size: "medium",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Secondary Variant Stories
export const SecondaryLight: Story = {
  args: {
    children: "일기쓰기",
    variant: "secondary",
    size: "medium",
    theme: "light",
  },
};

export const SecondaryDark: Story = {
  args: {
    children: "일기쓰기",
    variant: "secondary",
    size: "medium",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Tertiary Variant Stories
export const TertiaryLight: Story = {
  args: {
    children: "일기쓰기",
    variant: "tertiary",
    size: "medium",
    theme: "light",
  },
};

export const TertiaryDark: Story = {
  args: {
    children: "일기쓰기",
    variant: "tertiary",
    size: "medium",
    theme: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Size Variants
export const Small: Story = {
  args: {
    children: "일기쓰기",
    variant: "primary",
    size: "small",
    theme: "light",
  },
};

export const Medium: Story = {
  args: {
    children: "일기쓰기",
    variant: "primary",
    size: "medium",
    theme: "light",
  },
};

export const Large: Story = {
  args: {
    children: "일기쓰기",
    variant: "primary",
    size: "large",
    theme: "light",
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    children: "일기쓰기",
    variant: "primary",
    size: "medium",
    theme: "light",
    disabled: true,
  },
};

// All Variants Showcase
export const AllVariantsLight: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button variant="primary" size="small" theme="light">
          Small Primary
        </Button>
        <Button variant="primary" size="medium" theme="light">
          Medium Primary
        </Button>
        <Button variant="primary" size="large" theme="light">
          Large Primary
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button variant="secondary" size="small" theme="light">
          Small Secondary
        </Button>
        <Button variant="secondary" size="medium" theme="light">
          Medium Secondary
        </Button>
        <Button variant="secondary" size="large" theme="light">
          Large Secondary
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button variant="tertiary" size="small" theme="light">
          Small Tertiary
        </Button>
        <Button variant="tertiary" size="medium" theme="light">
          Medium Tertiary
        </Button>
        <Button variant="tertiary" size="large" theme="light">
          Large Tertiary
        </Button>
      </div>
    </div>
  ),
};

export const AllVariantsDark: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button variant="primary" size="small" theme="dark">
          Small Primary
        </Button>
        <Button variant="primary" size="medium" theme="dark">
          Medium Primary
        </Button>
        <Button variant="primary" size="large" theme="dark">
          Large Primary
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button variant="secondary" size="small" theme="dark">
          Small Secondary
        </Button>
        <Button variant="secondary" size="medium" theme="dark">
          Medium Secondary
        </Button>
        <Button variant="secondary" size="large" theme="dark">
          Large Secondary
        </Button>
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Button variant="tertiary" size="small" theme="dark">
          Small Tertiary
        </Button>
        <Button variant="tertiary" size="medium" theme="dark">
          Medium Tertiary
        </Button>
        <Button variant="tertiary" size="large" theme="dark">
          Large Tertiary
        </Button>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};
