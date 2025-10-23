import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Selectbox } from "./index";

const sampleOptions = [
  { value: "all", label: "전체" },
  { value: "happy", label: "행복해요" },
  { value: "sad", label: "슬퍼요" },
  { value: "surprise", label: "놀랐어요" },
  { value: "angry", label: "화나요" },
  { value: "etc", label: "기타" },
];

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
      description: "셀렉트박스의 플레이스홀더",
    },
  },
} satisfies Meta<typeof Selectbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    options: sampleOptions,
    placeholder: "선택하세요",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    theme: "light",
    options: sampleOptions,
    placeholder: "선택하세요",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    options: sampleOptions,
    placeholder: "선택하세요",
  },
};

export const Small: Story = {
  args: {
    variant: "tertiary",
    size: "small",
    theme: "light",
    options: sampleOptions,
    placeholder: "선택하세요",
  },
};

export const Medium: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    options: sampleOptions,
    placeholder: "선택하세요",
  },
};

export const Large: Story = {
  args: {
    variant: "tertiary",
    size: "large",
    theme: "light",
    options: sampleOptions,
    placeholder: "선택하세요",
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "dark",
    options: sampleOptions,
    placeholder: "선택하세요",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const FullWidth: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    fullWidth: true,
    options: sampleOptions,
    placeholder: "선택하세요",
  },
  parameters: {
    layout: "padded",
  },
};

export const Disabled: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    disabled: true,
    options: sampleOptions,
    placeholder: "선택하세요",
  },
};

export const WithValue: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    options: sampleOptions,
    value: "happy",
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
          options={sampleOptions}
          placeholder="Primary Small"
        />
        <Selectbox
          variant="primary"
          size="medium"
          options={sampleOptions}
          placeholder="Primary Medium"
        />
        <Selectbox
          variant="primary"
          size="large"
          options={sampleOptions}
          placeholder="Primary Large"
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="secondary"
          size="small"
          options={sampleOptions}
          placeholder="Secondary Small"
        />
        <Selectbox
          variant="secondary"
          size="medium"
          options={sampleOptions}
          placeholder="Secondary Medium"
        />
        <Selectbox
          variant="secondary"
          size="large"
          options={sampleOptions}
          placeholder="Secondary Large"
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="tertiary"
          size="small"
          options={sampleOptions}
          placeholder="Tertiary Small"
        />
        <Selectbox
          variant="tertiary"
          size="medium"
          options={sampleOptions}
          placeholder="Tertiary Medium"
        />
        <Selectbox
          variant="tertiary"
          size="large"
          options={sampleOptions}
          placeholder="Tertiary Large"
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
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Selectbox
            variant="primary"
            theme="light"
            options={sampleOptions}
            placeholder="Primary"
          />
          <Selectbox
            variant="secondary"
            theme="light"
            options={sampleOptions}
            placeholder="Secondary"
          />
          <Selectbox
            variant="tertiary"
            theme="light"
            options={sampleOptions}
            placeholder="Tertiary"
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
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Selectbox
            variant="primary"
            theme="dark"
            options={sampleOptions}
            placeholder="Primary"
          />
          <Selectbox
            variant="secondary"
            theme="dark"
            options={sampleOptions}
            placeholder="Secondary"
          />
          <Selectbox
            variant="tertiary"
            theme="dark"
            options={sampleOptions}
            placeholder="Tertiary"
          />
        </div>
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
          options={sampleOptions}
          placeholder="Normal"
        />
        <Selectbox
          variant="primary"
          options={sampleOptions}
          placeholder="Disabled"
          disabled
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="secondary"
          options={sampleOptions}
          placeholder="Normal"
        />
        <Selectbox
          variant="secondary"
          options={sampleOptions}
          placeholder="Disabled"
          disabled
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Selectbox
          variant="tertiary"
          options={sampleOptions}
          placeholder="Normal"
        />
        <Selectbox
          variant="tertiary"
          options={sampleOptions}
          placeholder="Disabled"
          disabled
        />
      </div>
    </div>
  ),
};

export const AllCombinations: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => {
    const variants = ["primary", "secondary", "tertiary"] as const;
    const sizes = ["small", "medium", "large"] as const;
    const themes = ["light", "dark"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {themes.map((theme) => (
          <div
            key={theme}
            style={{
              padding: "1.5rem",
              backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                marginBottom: "1.5rem",
                color: theme === "dark" ? "white" : "black",
              }}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
            </h3>
            {variants.map((variant) => (
              <div key={variant} style={{ marginBottom: "1.5rem" }}>
                <h4
                  style={{
                    marginBottom: "0.75rem",
                    color: theme === "dark" ? "white" : "black",
                    fontSize: "0.875rem",
                  }}
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </h4>
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  {sizes.map((size) => (
                    <Selectbox
                      key={size}
                      variant={variant}
                      size={size}
                      theme={theme}
                      options={sampleOptions}
                      placeholder={`${size}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
