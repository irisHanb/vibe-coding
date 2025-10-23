import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchBar } from "./index";

const meta = {
  title: "Commons/Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "검색바의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "검색바의 크기",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "검색바의 테마",
    },
    fullWidth: {
      control: "boolean",
      description: "검색바의 너비를 100%로 설정",
    },
    disabled: {
      control: "boolean",
      description: "검색바의 비활성화 상태",
    },
    placeholder: {
      control: "text",
      description: "검색바의 플레이스홀더 텍스트",
    },
  },
} satisfies Meta<typeof SearchBar>;

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

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    theme: "light",
    placeholder: "검색어를 입력해 주세요.",
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

export const FullWidth: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    fullWidth: true,
    placeholder: "검색어를 입력해 주세요.",
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
    placeholder: "검색어를 입력해 주세요.",
  },
};

export const WithOnSearch: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    placeholder: "검색어를 입력하고 Enter를 누르세요.",
    onSearch: (value: string) => {
      alert(`검색: ${value}`);
    },
  },
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <SearchBar variant="primary" size="small" placeholder="Primary Small" />
        <SearchBar
          variant="primary"
          size="medium"
          placeholder="Primary Medium"
        />
        <SearchBar variant="primary" size="large" placeholder="Primary Large" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <SearchBar
          variant="secondary"
          size="small"
          placeholder="Secondary Small"
        />
        <SearchBar
          variant="secondary"
          size="medium"
          placeholder="Secondary Medium"
        />
        <SearchBar
          variant="secondary"
          size="large"
          placeholder="Secondary Large"
        />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <SearchBar
          variant="tertiary"
          size="small"
          placeholder="Tertiary Small"
        />
        <SearchBar
          variant="tertiary"
          size="medium"
          placeholder="Tertiary Medium"
        />
        <SearchBar
          variant="tertiary"
          size="large"
          placeholder="Tertiary Large"
        />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <SearchBar variant="primary" placeholder="Normal" />
        <SearchBar variant="primary" disabled placeholder="Disabled" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <SearchBar variant="secondary" placeholder="Normal" />
        <SearchBar variant="secondary" disabled placeholder="Disabled" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <SearchBar variant="tertiary" placeholder="Normal" />
        <SearchBar variant="tertiary" disabled placeholder="Disabled" />
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
          <SearchBar variant="primary" theme="light" placeholder="Primary" />
          <SearchBar
            variant="secondary"
            theme="light"
            placeholder="Secondary"
          />
          <SearchBar variant="tertiary" theme="light" placeholder="Tertiary" />
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
          <SearchBar variant="primary" theme="dark" placeholder="Primary" />
          <SearchBar variant="secondary" theme="dark" placeholder="Secondary" />
          <SearchBar variant="tertiary" theme="dark" placeholder="Tertiary" />
        </div>
      </div>
    </div>
  ),
};
