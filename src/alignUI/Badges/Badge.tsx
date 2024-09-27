import { AppTheme } from "../../theme";
import { css, SerializedStyles, Theme, useTheme } from "@emotion/react";
import { forwardRef } from "react";

export type BadgeColor =
  | "blue"
  | "orange"
  | "red"
  | "yellow"
  | "green"
  | "purple"
  | "sky"
  | "pink"
  | "teal"
  | "gray";

export type BadgeProps = {
  _style: "light" | "lighter" | "filled" | "stroke"; // _style to not collide with style prop
  text: string;
  color: BadgeColor;
  type?: "basic" | "with_dot";
  icon?: React.ReactNode;
  size?: "medium" | "small";
  number?: boolean;
  disabled?: boolean;
  styleOverrides?: SerializedStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type themeStateKeys = keyof AppTheme["colors"]["state"];
const colorToStateMap: Record<BadgeColor, themeStateKeys> = {
  blue: "information",
  orange: "warning",
  red: "error",
  yellow: "away",
  green: "success",
  purple: "feature",
  sky: "verified",
  pink: "highlighted",
  teal: "stable",
  gray: "faded",
};

const getColorFromTheme = (
  theme: Theme,
  color: BadgeColor,
  style: "light" | "filled" | "stroke" | "lighter"
): [string, string] => {
  const mainColor =
    theme.colors.state[colorToStateMap[color]][
      style === "light" ? "light" : "base"
    ];
  switch (style) {
    case "light":
      return [mainColor, theme.colors.state[colorToStateMap[color]].dark];
    case "filled":
      return [mainColor, theme.colors.neutral.static.white];
    case "stroke":
      return [mainColor, mainColor];
    case "lighter":
      return [theme.colors.state[colorToStateMap[color]].lighter, mainColor];
  }
};

const sharedCss = (theme: Theme, size: "medium" | "small", number: boolean) => {
  const pixelSize = size === "medium" ? "20px" : "16px";
  return [
    theme.typography[size === "medium" ? "label-xs" : "subheading-xxs"],
    css`
      text-align: center;
      text-transform: uppercase;
      width: ${number ? pixelSize : "fit-content"};
      height: ${pixelSize};
      padding: ${number ? "2px" : `2px 8px 2px 8px`};
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    `,
  ];
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      _style,
      color,
      text,
      icon,
      type = "basic",
      size = "medium",
      number = false,
      disabled = false,
      styleOverrides,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();

    const [colorToUse, textColor] = getColorFromTheme(theme, color, _style);
    return (
      <div
        ref={ref}
        css={[
          ...sharedCss(theme, size, number),
          css`
            color: ${textColor};
            border: 1px solid ${colorToUse};
            background-color: ${_style === "stroke"
              ? "transparent"
              : colorToUse};
          `,
          disabled &&
            css`
              background-color: transparent;
              color: ${theme.colors.text["disabled-300"]};
              border: 1px solid ${theme.colors.stroke["soft-200"]};
            `,
          styleOverrides,
        ]}
        {...rest}
      >
        {type === "basic" && icon}
        {type === "with_dot" && (
          <div
            css={css`
              margin: 0 4px;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: ${textColor};
            `}
          />
        )}
        {text}
      </div>
    );
  }
);

Badge.displayName = "Badge";
