import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Selectbox } from "./index";

const meta = {
  title: "Commons/Components/Selectbox",
  component: Selectbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "셀렉트박스의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "셀렉트박스의 크기",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "셀렉트박스의 테마",
    },
    fullWidth: {
      control: "boolean",
      description: "셀렉트박스의 너비를 100%로 설정",
    },
    disabled: {
      control: "boolean",
      description: "셀렉트박스의 비활성화 상태",
    },
    placeholder: {
      control: "text",
      description: "셀렉트박스의 플레이스홀더 텍스트",
    },
  },
} satisfies Meta<typeof Selectbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: "1", label: "옵션 1" },
  { value: "2", label: "옵션 2" },
  { value: "3", label: "옵션 3" },
  { value: "4", label: "옵션 4" },
  { value: "5", label: "옵션 5" },
];

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "선택하세요",
    options: sampleOptions,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    theme: "light",
    placeholder: "선택하세요",
    options: sampleOptions,
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    placeholder: "선택하세요",
    options: sampleOptions,
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    theme: "light",
    placeholder: "선택하세요",
    options: sampleOptions,
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    theme: "light",
    placeholder: "선택하세요",
    options: sampleOptions,
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "dark",
    placeholder: "선택하세요",
    options: sampleOptions,
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
    placeholder: "선택하세요",
    options: sampleOptions,
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
    placeholder: "선택하세요",
    options: sampleOptions,
  },
};

export const WithDefaultValue: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    value: "2",
    options: sampleOptions,
  },
};

export const WithManyOptions: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "선택하세요",
    options: [
      { value: "1", label: "옵션 1" },
      { value: "2", label: "옵션 2" },
      { value: "3", label: "옵션 3" },
      { value: "4", label: "옵션 4" },
      { value: "5", label: "옵션 5" },
      { value: "6", label: "옵션 6" },
      { value: "7", label: "옵션 7" },
      { value: "8", label: "옵션 8" },
      { value: "9", label: "옵션 9" },
      { value: "10", label: "옵션 10" },
    ],
  },
};

export const AllVariants: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="primary"
          size="small"
          placeholder="Primary Small"
          options={sampleOptions}
        />
        <Selectbox
          variant="primary"
          size="medium"
          placeholder="Primary Medium"
          options={sampleOptions}
        />
        <Selectbox
          variant="primary"
          size="large"
          placeholder="Primary Large"
          options={sampleOptions}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="secondary"
          size="small"
          placeholder="Secondary Small"
          options={sampleOptions}
        />
        <Selectbox
          variant="secondary"
          size="medium"
          placeholder="Secondary Medium"
          options={sampleOptions}
        />
        <Selectbox
          variant="secondary"
          size="large"
          placeholder="Secondary Large"
          options={sampleOptions}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="tertiary"
          size="small"
          placeholder="Tertiary Small"
          options={sampleOptions}
        />
        <Selectbox
          variant="tertiary"
          size="medium"
          placeholder="Tertiary Medium"
          options={sampleOptions}
        />
        <Selectbox
          variant="tertiary"
          size="large"
          placeholder="Tertiary Large"
          options={sampleOptions}
        />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="primary"
          placeholder="Normal"
          options={sampleOptions}
        />
        <Selectbox
          variant="primary"
          disabled
          placeholder="Disabled"
          options={sampleOptions}
        />
        <Selectbox
          variant="primary"
          value="2"
          placeholder="Selected"
          options={sampleOptions}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="secondary"
          placeholder="Normal"
          options={sampleOptions}
        />
        <Selectbox
          variant="secondary"
          disabled
          placeholder="Disabled"
          options={sampleOptions}
        />
        <Selectbox
          variant="secondary"
          value="2"
          placeholder="Selected"
          options={sampleOptions}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="tertiary"
          placeholder="Normal"
          options={sampleOptions}
        />
        <Selectbox
          variant="tertiary"
          disabled
          placeholder="Disabled"
          options={sampleOptions}
        />
        <Selectbox
          variant="tertiary"
          value="2"
          placeholder="Selected"
          options={sampleOptions}
        />
      </div>
    </div>
  ),
};

export const AllThemes: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Light Theme</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Selectbox
            variant="primary"
            theme="light"
            placeholder="Primary"
            options={sampleOptions}
          />
          <Selectbox
            variant="secondary"
            theme="light"
            placeholder="Secondary"
            options={sampleOptions}
          />
          <Selectbox
            variant="tertiary"
            theme="light"
            placeholder="Tertiary"
            options={sampleOptions}
          />
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
          <Selectbox
            variant="primary"
            theme="dark"
            placeholder="Primary"
            options={sampleOptions}
          />
          <Selectbox
            variant="secondary"
            theme="dark"
            placeholder="Secondary"
            options={sampleOptions}
          />
          <Selectbox
            variant="tertiary"
            theme="dark"
            placeholder="Tertiary"
            options={sampleOptions}
          />
        </div>
      </div>
    </div>
  ),
};
