import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./index";

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
      description: "인풋의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "인풋의 크기",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "인풋의 테마",
    },
    fullWidth: {
      control: "boolean",
      description: "인풋의 너비를 100%로 설정",
    },
    error: {
      control: "boolean",
      description: "인풋의 에러 상태",
    },
    disabled: {
      control: "boolean",
      description: "인풋의 비활성화 상태",
    },
    placeholder: {
      control: "text",
      description: "인풋에 표시될 플레이스홀더",
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
    placeholder: "Primary Input",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    theme: "light",
    placeholder: "Secondary Input",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    placeholder: "Tertiary Input",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    theme: "light",
    placeholder: "Small Input",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    theme: "light",
    placeholder: "Large Input",
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "dark",
    placeholder: "Dark Theme Input",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    fullWidth: true,
    placeholder: "Full Width Input",
  },
  parameters: {
    layout: "padded",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    disabled: true,
    placeholder: "Disabled Input",
  },
};

export const Error: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    error: true,
    placeholder: "Error Input",
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "Input with Icon",
    leftIcon: <span>🔍</span>,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "Input with Icon",
    rightIcon: <span>✓</span>,
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "Input",
    leftIcon: <span>🔍</span>,
    rightIcon: <span>✓</span>,
  },
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Input variant="primary" size="small" placeholder="Primary Small" />
        <Input variant="primary" size="medium" placeholder="Primary Medium" />
        <Input variant="primary" size="large" placeholder="Primary Large" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Input variant="secondary" size="small" placeholder="Secondary Small" />
        <Input
          variant="secondary"
          size="medium"
          placeholder="Secondary Medium"
        />
        <Input variant="secondary" size="large" placeholder="Secondary Large" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Input variant="tertiary" size="small" placeholder="Tertiary Small" />
        <Input variant="tertiary" size="medium" placeholder="Tertiary Medium" />
        <Input variant="tertiary" size="large" placeholder="Tertiary Large" />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Input variant="primary" placeholder="Normal" />
        <Input variant="primary" disabled placeholder="Disabled" />
        <Input variant="primary" error placeholder="Error" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Input variant="secondary" placeholder="Normal" />
        <Input variant="secondary" disabled placeholder="Disabled" />
        <Input variant="secondary" error placeholder="Error" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Input variant="tertiary" placeholder="Normal" />
        <Input variant="tertiary" disabled placeholder="Disabled" />
        <Input variant="tertiary" error placeholder="Error" />
      </div>
    </div>
  ),
};

export const AllThemes: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Light Theme</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input variant="primary" theme="light" placeholder="Primary" />
          <Input variant="secondary" theme="light" placeholder="Secondary" />
          <Input variant="tertiary" theme="light" placeholder="Tertiary" />
        </div>
      </div>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#1a1a1a",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "white" }}>Dark Theme</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input variant="primary" theme="dark" placeholder="Primary" />
          <Input variant="secondary" theme="dark" placeholder="Secondary" />
          <Input variant="tertiary" theme="dark" placeholder="Tertiary" />
        </div>
      </div>
    </div>
  ),
};
