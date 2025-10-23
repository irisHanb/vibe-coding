import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./index";

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
      description: "버튼의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼의 크기",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "버튼의 테마",
    },
    fullWidth: {
      control: "boolean",
      description: "버튼의 너비를 100%로 설정",
    },
    disabled: {
      control: "boolean",
      description: "버튼의 비활성화 상태",
    },
    children: {
      control: "text",
      description: "버튼에 표시될 텍스트",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    theme: "light",
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    children: "Tertiary Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    theme: "light",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    theme: "light",
    children: "Large Button",
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "dark",
    children: "Dark Theme Button",
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
    children: "Full Width Button",
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
    children: "Disabled Button",
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    children: "Button with Icon",
    leftIcon: <span>←</span>,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    children: "Button with Icon",
    rightIcon: <span>→</span>,
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    children: "Button",
    leftIcon: <span>←</span>,
    rightIcon: <span>→</span>,
  },
};

export const AllVariants: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="primary" size="small">
          Primary Small
        </Button>
        <Button variant="primary" size="medium">
          Primary Medium
        </Button>
        <Button variant="primary" size="large">
          Primary Large
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="secondary" size="small">
          Secondary Small
        </Button>
        <Button variant="secondary" size="medium">
          Secondary Medium
        </Button>
        <Button variant="secondary" size="large">
          Secondary Large
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="tertiary" size="small">
          Tertiary Small
        </Button>
        <Button variant="tertiary" size="medium">
          Tertiary Medium
        </Button>
        <Button variant="tertiary" size="large">
          Tertiary Large
        </Button>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="primary">Normal</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="secondary">Normal</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="tertiary">Normal</Button>
        <Button variant="tertiary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
};

export const AllThemes: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Light Theme</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant="primary" theme="light">
            Primary
          </Button>
          <Button variant="secondary" theme="light">
            Secondary
          </Button>
          <Button variant="tertiary" theme="light">
            Tertiary
          </Button>
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
          <Button variant="primary" theme="dark">
            Primary
          </Button>
          <Button variant="secondary" theme="dark">
            Secondary
          </Button>
          <Button variant="tertiary" theme="dark">
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  ),
};
