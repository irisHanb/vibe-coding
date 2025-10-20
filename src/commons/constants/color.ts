// Blue Color Palette
export const BLUE = {
  "05": "#F0F7FF",
  "10": "#DBEEFF",
  "20": "#BDDBFF",
  "30": "#93BEFF",
  "40": "#6DA5FA",
  "50": "#497CFF",
  "60": "#3A5CF3",
  "70": "#274AE1",
  "80": "#1530A6",
  "90": "#0B2184",
} as const;

// Gray Color Palette
export const GRAY = {
  WHITE: "#FFFFFF",
  "05": "#F2F2F2",
  "10": "#E4E4E4",
  "20": "#D4D3D3",
  "30": "#C7C7C7",
  "40": "#ABABAB",
  "50": "#919191",
  "60": "#777777",
  "70": "#5F5F5F",
  "80": "#333333",
  "90": "#1C1C1C",
  BLACK: "#000000",
} as const;

// Red Color Palette
export const RED = {
  "05": "#FDD7DC",
  "10": "#F797A4",
  "20": "#F4677A",
  "30": "#F03851", // Error color
  "40": "#E4112E",
  "50": "#B40E24",
  "60": "#850A1B",
} as const;

// Green Color Palette
export const GREEN = {
  "05": "#D3F3E0",
  "10": "#92E6B9",
  "20": "#15D66F",
  "30": "#12B75F", // Success color
  "40": "#109C51",
  "50": "#0E723C",
  "60": "#084424",
} as const;

// Yellow Color Palette
export const YELLOW = {
  "05": "#FFE499",
  "10": "#FFD666",
  "20": "#FFC933",
  "30": "#FFB300",
  "40": "#EBA500",
  "50": "#D69600",
  "60": "#B27D00",
} as const;

// Cool Gray Color Palette
export const COOL_GRAY = {
  "01": "#F8F8FA",
  "05": "#F6F6F9",
  "10": "#EDEEF2",
  "20": "#DDDFE5",
  "30": "#D2D4DD",
  "40": "#C7C9D5",
  "50": "#BBBECD",
  "60": "#B0B3C4",
} as const;

// Gradient Colors
export const GRADIENT = {
  PRIMARY_START: "#6DA5FA",
  PRIMARY_END: "#92EAF5",
  SKELETON_START: "#FFFFFF00",
  SKELETON_MID: "#FFFFFF99",
  SKELETON_END: "#FFFFFF00",
} as const;

// Semantic Colors
export const SEMANTIC = {
  ERROR: RED["30"],
  SUCCESS: GREEN["30"],
  WARNING: YELLOW["30"],
  INFO: BLUE["50"],
} as const;

// All colors type
export type ColorToken = typeof BLUE &
  typeof GRAY &
  typeof RED &
  typeof GREEN &
  typeof YELLOW &
  typeof COOL_GRAY &
  typeof GRADIENT &
  typeof SEMANTIC;

// Color alias for convenience
export const COLOR = {
  ...BLUE,
  ...GRAY,
  ...RED,
  ...GREEN,
  ...YELLOW,
  ...COOL_GRAY,
  ...GRADIENT,
  ...SEMANTIC,
} as const;

