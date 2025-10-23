import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Pagination } from "./index";

const meta = {
  title: "Commons/Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "페이지네이션의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "페이지네이션의 크기",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "페이지네이션의 테마",
    },
    currentPage: {
      control: "number",
      description: "현재 페이지 번호",
    },
    totalPages: {
      control: "number",
      description: "전체 페이지 수",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    theme: "light",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    theme: "light",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    theme: "light",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    theme: "light",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "dark",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const FewPages: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    currentPage: 1,
    totalPages: 3,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const ManyPages: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    currentPage: 15,
    totalPages: 50,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const FirstPage: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const LastPage: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const MiddlePage: Story = {
  args: {
    variant: "primary",
    size: "medium",
    theme: "light",
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Interactive: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        variant="primary"
        size="medium"
        theme="light"
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    );
  },
};

export const AllVariants: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Primary Small
            </h4>
            <Pagination
              variant="primary"
              size="small"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Primary Medium
            </h4>
            <Pagination
              variant="primary"
              size="medium"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Primary Large
            </h4>
            <Pagination
              variant="primary"
              size="large"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Secondary Small
            </h4>
            <Pagination
              variant="secondary"
              size="small"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Secondary Medium
            </h4>
            <Pagination
              variant="secondary"
              size="medium"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Secondary Large
            </h4>
            <Pagination
              variant="secondary"
              size="large"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Tertiary Small
            </h4>
            <Pagination
              variant="tertiary"
              size="small"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Tertiary Medium
            </h4>
            <Pagination
              variant="tertiary"
              size="medium"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
              Tertiary Large
            </h4>
            <Pagination
              variant="tertiary"
              size="large"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const AllThemes: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Light Theme</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Pagination
              variant="primary"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
            <Pagination
              variant="secondary"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
            <Pagination
              variant="tertiary"
              theme="light"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Pagination
              variant="primary"
              theme="dark"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
            <Pagination
              variant="secondary"
              theme="dark"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
            <Pagination
              variant="tertiary"
              theme="dark"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const PageNavigation: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h3 style={{ marginBottom: "1rem" }}>
            Current Page: {currentPage} / 10
          </h3>
          <Pagination
            variant="primary"
            size="medium"
            theme="light"
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setCurrentPage(1)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#497cff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Go to First
          </button>
          <button
            onClick={() => setCurrentPage(5)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#497cff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Go to Middle
          </button>
          <button
            onClick={() => setCurrentPage(10)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#497cff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Go to Last
          </button>
        </div>
      </div>
    );
  },
};
