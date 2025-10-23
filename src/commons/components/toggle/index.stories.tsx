import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toggle } from "./index";
import { useState } from "react";

const meta = {
  title: "Commons/Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "토글의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "토글의 크기",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "토글의 테마",
    },
    checked: {
      control: "boolean",
      description: "토글의 체크 상태",
    },
    disabled: {
      control: "boolean",
      description: "토글의 비활성화 상태",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    checked: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    theme: "light",
    checked: false,
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    checked: false,
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    theme: "light",
    checked: false,
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    checked: false,
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    theme: "light",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    checked: false,
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "dark",
    checked: false,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    checked: true,
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        variant="primary"
        size="medium"
        theme="light"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Toggle variant="primary" size="small" checked={false} />
        <Toggle variant="primary" size="medium" checked={false} />
        <Toggle variant="primary" size="large" checked={false} />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Toggle variant="secondary" size="small" checked={false} />
        <Toggle variant="secondary" size="medium" checked={false} />
        <Toggle variant="secondary" size="large" checked={false} />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Toggle variant="tertiary" size="small" checked={false} />
        <Toggle variant="tertiary" size="medium" checked={false} />
        <Toggle variant="tertiary" size="large" checked={false} />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Toggle variant="primary" checked={false} />
        <Toggle variant="primary" checked={true} />
        <Toggle variant="primary" checked={false} disabled />
        <Toggle variant="primary" checked={true} disabled />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Toggle variant="secondary" checked={false} />
        <Toggle variant="secondary" checked={true} />
        <Toggle variant="secondary" checked={false} disabled />
        <Toggle variant="secondary" checked={true} disabled />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Toggle variant="tertiary" checked={false} />
        <Toggle variant="tertiary" checked={true} />
        <Toggle variant="tertiary" checked={false} disabled />
        <Toggle variant="tertiary" checked={true} disabled />
      </div>
    </div>
  ),
};

export const AllThemes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Light Theme</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Toggle variant="primary" theme="light" checked={false} />
          <Toggle variant="secondary" theme="light" checked={false} />
          <Toggle variant="tertiary" theme="light" checked={false} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <Toggle variant="primary" theme="light" checked={true} />
          <Toggle variant="secondary" theme="light" checked={true} />
          <Toggle variant="tertiary" theme="light" checked={true} />
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
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Toggle variant="primary" theme="dark" checked={false} />
          <Toggle variant="secondary" theme="dark" checked={false} />
          <Toggle variant="tertiary" theme="dark" checked={false} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <Toggle variant="primary" theme="dark" checked={true} />
          <Toggle variant="secondary" theme="dark" checked={true} />
          <Toggle variant="tertiary" theme="dark" checked={true} />
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Small</span>
          <Toggle variant="primary" size="small" checked={false} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Medium</span>
          <Toggle variant="primary" size="medium" checked={false} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Large</span>
          <Toggle variant="primary" size="large" checked={false} />
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Small</span>
          <Toggle variant="primary" size="small" checked={true} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Medium</span>
          <Toggle variant="primary" size="medium" checked={true} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Large</span>
          <Toggle variant="primary" size="large" checked={true} />
        </div>
      </div>
    </div>
  ),
};
