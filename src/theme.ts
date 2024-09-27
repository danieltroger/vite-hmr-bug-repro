import { css } from "@emotion/react";

export type Breakpoint = "initial" | "xs" | "sm" | "md" | "lg" | "xl";

export const breakpoints: Record<Breakpoint, number> = {
  initial: 0,
  xs: 390,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1640,
};

export const colorPalette = {
  neutral: {
    950: "#0E121B",
    900: "#181B25",
    800: "#222530",
    700: "#2B303B",
    600: "#525866",
    500: "#717784",
    400: "#99A0AE",
    300: "#CACFD8",
    200: "#E1E4EA",
    100: "#F2F5F8",
    50: "#F5F7FA",
    0: "#FFFFFF",
    alpha: {
      24: "rgba(153, 160, 174, 0.24)",
      16: "rgba(153, 160, 174, 0.16)",
      10: "rgba(153, 160, 174, 0.10)",
    },
  },
  blue: {
    950: "#122368",
    900: "#182F8B",
    800: "#1F3BAD",
    700: "#2547D0",
    600: "#3559E9",
    500: "#335CFF",
    400: "#6895FF",
    300: "#97BAFF",
    200: "#C0D5FF",
    100: "#D5E2FF",
    50: "#EBF1FF",
    alpha: {
      24: "rgba(71, 108, 255, 0.24)",
      16: "rgba(71, 108, 255, 0.16)",
      10: "rgba(71, 108, 255, 0.10)",
    },
  },
  orange: {
    950: "#683412",
    900: "#8B4618",
    800: "#AD581F",
    700: "#D06925",
    600: "#E97D35",
    500: "#FF9147",
    400: "#FFA468",
    300: "#FFC197",
    200: "#FFD9C0",
    100: "#FFE6D5",
    50: "#FFF3EB",
    alpha: {
      24: "rgba(255, 145, 71, 0.24)",
      16: "rgba(255, 145, 71, 0.16)",
      10: "rgba(255, 145, 71, 0.10)",
    },
  },
  red: {
    950: "#681219",
    900: "#8B1822",
    800: "#AD1F2B",
    700: "#D02533",
    600: "#E93544",
    500: "#FB3748",
    400: "#FF6875",
    300: "#FF97A0",
    200: "#FFC0C5",
    100: "#FFD5D8",
    50: "#FFEBEC",
    alpha: {
      24: "rgba(251, 55, 72, 0.24)",
      16: "rgba(251, 55, 72, 0.16)",
      10: "rgba(251, 55, 72, 0.10)",
    },
  },
  green: {
    950: "#0B4627",
    900: "#16643B",
    800: "#1A7544",
    700: "#178C4E",
    600: "#1DAF61",
    500: "#1FC16B",
    400: "#3EE089",
    300: "#84EBB4",
    200: "#C2F5DA",
    100: "#D0FBE9",
    50: "#E0FAEC",
    alpha: {
      24: "rgba(31, 193, 107, 0.24)",
      16: "rgba(31, 193, 107, 0.16)",
      10: "rgba(31, 193, 107, 0.10)",
    },
  },
  yellow: {
    950: "#624C18",
    900: "#86661D",
    800: "#A78025",
    700: "#C99A2C",
    600: "#E6A819",
    500: "#F6B51E",
    400: "#FFD268",
    300: "#FFE097",
    200: "#FFECC0",
    100: "#FFEFCC",
    50: "#FFF4D6",
    alpha: {
      24: "rgba(251, 198, 75, 0.24)",
      16: "rgba(251, 198, 75, 0.16)",
      10: "rgba(251, 198, 75, 0.10)",
    },
  },
  purple: {
    950: "#351A75",
    900: "#3D1D86",
    800: "#4C25A7",
    700: "#5B2CC9",
    600: "#693EE0",
    500: "#7D52F4",
    400: "#8C71F6",
    300: "#A897FF",
    200: "#CAC0FF",
    100: "#DCD5FF",
    50: "#EFEBFF",
    alpha: {
      24: "rgba(120, 77, 239, 0.24)",
      16: "rgba(120, 77, 239, 0.16)",
      10: "rgba(120, 77, 239, 0.10)",
    },
  },
  sky: {
    950: "#124B68",
    900: "#18658B",
    800: "#1F7EAD",
    700: "#2597D0",
    600: "#35ADE9",
    500: "#47C2FF",
    400: "#68CDFF",
    300: "#97DCFF",
    200: "#C0EAFF",
    100: "#D5F1FF",
    50: "#EBF8FF",
    alpha: {
      24: "rgba(71, 194, 255, 0.24)",
      16: "rgba(71, 194, 255, 0.16)",
      10: "rgba(71, 194, 255, 0.10)",
    },
  },
  pink: {
    950: "#68123D",
    900: "#8B1852",
    800: "#AD1F66",
    700: "#D0257A",
    600: "#E9358F",
    500: "#FB4BA3",
    400: "#FF68B3",
    300: "#FF97CB",
    200: "#FFC0DF",
    100: "#FFD5EA",
    50: "#FFEBF4",
    alpha: {
      24: "rgba(251, 75, 163, 0.24)",
      16: "rgba(251, 75, 163, 0.16)",
      10: "rgba(251, 75, 163, 0.10)",
    },
  },
  teal: {
    950: "#0B463E",
    900: "#16645A",
    800: "#1A7569",
    700: "#178C7D",
    600: "#1DAF9C",
    500: "#22D3BB",
    400: "#3FDEC9",
    300: "#84EBDD",
    200: "#C2F5EE",
    100: "#D0FBF5",
    50: "#E4FBF8",
    alpha: {
      24: "rgba(34, 211, 187, 0.24)",
      16: "rgba(34, 211, 187, 0.16)",
      10: "rgba(34, 211, 187, 0.10)",
    },
  },
  white: {
    alpha: {
      24: "rgba(255, 255, 255, 0.24)",
      16: "rgba(255, 255, 255, 0.16)",
      10: "rgba(255, 255, 255, 0.10)",
    },
  },
  black: {
    alpha: {
      24: "rgba(14, 18, 27, 0.24)",
      16: "rgba(14, 18, 27, 0.16)",
      10: "rgba(14, 18, 27, 0.10)",
    },
  },
  depict: {
    800: "#0B2191",
    700: "#0E27AD",
    600: "#102EC9",
    500: "#143AFF",
    alpha: {
      24: "rgba(20, 58, 255, 0.24)",
      16: "rgba(20, 58, 255, 0.16)",
      10: "rgba(20, 58, 255, 0.10)",
    },
  },
};

const lightColors = {
  primary: {
    dark: colorPalette.depict[800],
    darker: colorPalette.depict[700],
    base: colorPalette.depict[500],
    alpha16: colorPalette.depict.alpha[16],
    alpha10: colorPalette.depict.alpha[10],
    alpha24: colorPalette.depict.alpha[24],
    orange: "#FF5314",
  },
  neutral: {
    static: {
      black: colorPalette.neutral[950],
      white: colorPalette.neutral[0],
    },
    alpha16: colorPalette.neutral.alpha[16],
  },
  bg: {
    "strong-950": colorPalette.neutral[950],
    "strong-800": colorPalette.neutral[800],
    "sub-300": colorPalette.neutral[300],
    "sub-200": colorPalette.neutral[200],
    "weak-50": colorPalette.neutral[50],
    "white-0": colorPalette.neutral[0],
    "soft-200": colorPalette.neutral[200],
  },
  text: {
    "strong-950": colorPalette.neutral[950],
    "strong-600": colorPalette.neutral[600],
    "sub-600": colorPalette.neutral[600],
    "soft-400": colorPalette.neutral[400],
    "disabled-300": colorPalette.neutral[300],
    "white-0": colorPalette.neutral[0],
  },
  stroke: {
    "strong-950": colorPalette.neutral[950],
    "sub-300": colorPalette.neutral[300],
    "soft-200": colorPalette.neutral[200],
    "white-0": colorPalette.neutral[0],
  },
  icon: {
    "strong-950": colorPalette.neutral[950],
    "sub-600": colorPalette.neutral[600],
    "soft-400": colorPalette.neutral[400],
    "disabled-300": colorPalette.neutral[300],
    "white-0": colorPalette.neutral[0],
  },
  state: {
    faded: {
      dark: colorPalette.neutral[800],
      base: colorPalette.neutral[500],
      light: colorPalette.neutral[200],
      lighter: colorPalette.neutral[100],
    },
    information: {
      dark: colorPalette.blue[950],
      base: colorPalette.blue[500],
      light: colorPalette.blue[200],
      lighter: colorPalette.blue[50],
    },
    warning: {
      dark: colorPalette.orange[950],
      base: colorPalette.orange[500],
      light: colorPalette.orange[200],
      lighter: colorPalette.orange[50],
    },
    error: {
      dark: colorPalette.red[950],
      base: colorPalette.red[500],
      light: colorPalette.red[200],
      lighter: colorPalette.red[50],
    },
    success: {
      dark: colorPalette.green[950],
      base: colorPalette.green[500],
      light: colorPalette.green[200],
      lighter: colorPalette.green[50],
    },
    away: {
      dark: colorPalette.yellow[950],
      base: colorPalette.yellow[500],
      light: colorPalette.yellow[200],
      lighter: colorPalette.yellow[50],
    },
    feature: {
      dark: colorPalette.purple[950],
      base: colorPalette.purple[500],
      light: colorPalette.purple[200],
      lighter: colorPalette.purple[50],
    },
    verified: {
      dark: colorPalette.sky[950],
      base: colorPalette.sky[500],
      light: colorPalette.sky[200],
      lighter: colorPalette.sky[50],
    },
    highlighted: {
      dark: colorPalette.pink[950],
      base: colorPalette.pink[500],
      light: colorPalette.pink[200],
      lighter: colorPalette.pink[50],
    },
    stable: {
      dark: colorPalette.teal[950],
      base: colorPalette.teal[500],
      light: colorPalette.teal[200],
      lighter: colorPalette.teal[50],
    },
  },
};

export const darkColors = {
  primary: {
    dark: colorPalette.depict[800],
    darker: colorPalette.depict[700],
    // Color is from the one and only Charles, this is to achieve enough text contrast
    base: "#5671FF",
    alpha16: colorPalette.depict.alpha[16],
    alpha24: colorPalette.depict.alpha[24],
    alpha10: colorPalette.depict.alpha[10],
    orange: "#FF5314",
  },
  neutral: {
    static: {
      white: colorPalette.neutral[950],
      black: colorPalette.neutral[0],
    },
    alpha16: colorPalette.neutral.alpha[16],
  },
  bg: {
    "strong-950": colorPalette.neutral[0],
    "strong-800": colorPalette.neutral[200],
    "sub-300": colorPalette.neutral[600],
    "sub-200": colorPalette.neutral[700],
    "weak-50": colorPalette.neutral[900],
    "white-0": colorPalette.neutral[950],
    "soft-200": colorPalette.neutral[700],
  },
  text: {
    "strong-950": colorPalette.neutral[0],
    "strong-600": colorPalette.neutral[400],
    "soft-400": colorPalette.neutral[600],
    "sub-600": colorPalette.neutral[400],
    "disabled-300": colorPalette.neutral[700],
    "white-0": colorPalette.neutral[950],
  },
  stroke: {
    "strong-950": colorPalette.neutral[0],
    "sub-300": colorPalette.neutral[600],
    "soft-200": colorPalette.neutral[700],
    "white-0": colorPalette.neutral[950],
  },
  icon: {
    "strong-950": colorPalette.neutral[0],
    "sub-600": colorPalette.neutral[400],
    "soft-400": colorPalette.neutral[500],
    "disabled-300": colorPalette.neutral[600],
    "white-0": colorPalette.neutral[950],
  },
  state: {
    faded: {
      dark: colorPalette.neutral[300],
      base: colorPalette.neutral[500],
      light: colorPalette.neutral.alpha[24],
      lighter: colorPalette.neutral.alpha[16],
    },
    information: {
      dark: colorPalette.blue[400],
      base: colorPalette.blue[500],
      light: colorPalette.blue.alpha[24],
      lighter: colorPalette.blue.alpha[16],
    },
    warning: {
      dark: colorPalette.orange[400],
      base: colorPalette.orange[600],
      light: colorPalette.orange.alpha[24],
      lighter: colorPalette.orange.alpha[16],
    },
    error: {
      dark: colorPalette.red[400],
      base: colorPalette.red[600],
      light: colorPalette.red.alpha[24],
      lighter: colorPalette.red.alpha[16],
    },
    success: {
      dark: colorPalette.green[400],
      base: colorPalette.green[600],
      light: colorPalette.green.alpha[24],
      lighter: colorPalette.green.alpha[16],
    },
    away: {
      dark: colorPalette.yellow[400],
      base: colorPalette.yellow[600],
      light: colorPalette.yellow.alpha[24],
      lighter: colorPalette.yellow.alpha[16],
    },
    feature: {
      dark: colorPalette.purple[400],
      base: colorPalette.purple[500],
      light: colorPalette.purple.alpha[24],
      lighter: colorPalette.purple.alpha[16],
    },
    verified: {
      dark: colorPalette.sky[400],
      base: colorPalette.sky[600],
      light: colorPalette.sky.alpha[24],
      lighter: colorPalette.sky.alpha[16],
    },
    highlighted: {
      dark: colorPalette.pink[400],
      base: colorPalette.pink[600],
      light: colorPalette.pink.alpha[24],
      lighter: colorPalette.pink.alpha[16],
    },
    stable: {
      dark: colorPalette.teal[400],
      base: colorPalette.teal[600],
      light: colorPalette.teal.alpha[24],
      lighter: colorPalette.teal.alpha[16],
    },
  },
};

export const buildTheme = (darkMode: boolean) => {
  const colors = darkMode ? darkColors : lightColors;

  return {
    colors,
    breakpoints,
    typography: {
      h1: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Title/H1 Title */
        font-family: "Neue Montreal";
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px; /* 114.286% */
        letter-spacing: -0.56px;
      `,
      h2: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Title/H2 Title */
        font-family: "Neue Montreal";
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: 56px; /* 116.667% */
        letter-spacing: -0.48px;
      `,
      h3: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Title/H3 Title */
        font-family: "Neue Montreal";
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px; /* 120% */
        letter-spacing: -0.4px;
      `,
      h4: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Title/H4 Title */
        font-family: "Neue Montreal";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 125% */
        letter-spacing: -0.16px;
      `,
      h5: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Title/H5 Title */
        font-family: "Neue Montreal";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px; /* 133.333% */
      `,
      h6: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Title/H6 Title */
        font-family: "Neue Montreal";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px; /* 140% */
      `,
      "label-xl": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Label/X Large */
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.36px;
      `,
      "label-l": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Label/Large */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.27px;
      `,
      label: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Label/Large */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.27px;
      `,
      "label-m": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Label/Medium */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
        letter-spacing: -0.176px;
      `,
      "label-s": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Label/Small */
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        letter-spacing: -0.084px;
      `,
      "label-xs": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Label/X Small */
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 133.333% */
      `,
      "paragraph-xl": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Paragraph/X Large */
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.36px;
      `,
      paragraph: css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Paragraph/Large */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.27px;
      `,
      "paragraph-m": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Paragraph/Medium */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: -0.176px;
      `,
      "paragraph-s": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Paragraph/Small */
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: -0.084px;
      `,
      "paragraph-xs": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Paragraph/X Small */
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 133.333% */
      `,
      "subheading-m": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Subheading/Medium */
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
        letter-spacing: 0.96px;
        text-transform: uppercase;
      `,
      "subheading-s": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Subheading/Small */
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.84px;
        text-transform: uppercase;
      `,
      "subheading-xs": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Subheading/X Small */
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 133.333% */
        letter-spacing: 0.48px;
        text-transform: uppercase;
      `,
      "subheading-xxs": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Subheading/2X Small */
        font-family: Inter;
        font-size: 11px;
        font-style: normal;
        font-weight: 500;
        line-height: 12px; /* 109.091% */
        letter-spacing: 0.22px;
        text-transform: uppercase;
      `,
      "docs-label": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Docs/Label */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 32px; /* 177.778% */
        letter-spacing: -0.27px;
      `,
      "docs-paragraph": css`
        color: ${colors.text["strong-950"]};
        font-feature-settings:
          "ss11" on,
          "cv09" on,
          "liga" off,
          "calt" off;

        /* Docs/Paragraph */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px; /* 177.778% */
        letter-spacing: -0.27px;
      `,
    },
    shadows: {
      large: darkMode
        ? "0px 1px 2px 0px rgba(0, 0, 0, 0.24), 0px 16px 32px -12px rgba(0, 0, 0, 0.24), 0px 32px 40px -8px rgba(0, 0, 0, 0.24)"
        : "0px 1px 2px 0px rgba(0, 0, 0, 0.03), 0px 16px 32px -12px rgba(0, 0, 0, 0.10), 0px 32px 40px -8px rgba(0, 0, 0, 0.24)",
      regular: {
        xs: darkMode
          ? "0px 1px 2px 0px rgba(0, 0, 0, 0.24)"
          : "0px 1px 2px 0px rgba(10, 13, 20, 0.03)",
        medium: darkMode
          ? "0px 16px 32px -12px rgba(0, 0, 0, 0.24)"
          : "0px 16px 32px -12px rgba(14, 18, 27, 0.10)",
      },
      "important-focus": `0px 0px 0px 4px ${darkMode ? darkColors["neutral"].alpha16 : lightColors["neutral"].alpha16}, 0px 0px 0px 2px ${darkMode ? darkColors["bg"]["white-0"] : lightColors["bg"]["white-0"]}`,
    },
  };
};

export type AppTheme = ReturnType<typeof buildTheme>;
