import * as React from "react";

export type Size = "base" | "md" | "sm" | "xs" | "lg" | "xl";

export type TextType = "div" | "span";

export interface TextProps extends JasesCommon.BaseProps {
  /**
   * Text to be rendered
   */
  children: React.ReactText | React.ReactNode;
  /**
   * Denotes weight of `Text`
   */
  weight?: "bold" | "normal" | "light" | "extralight" | "semibold" | "medium";
  /**
   * Size of `Text`
   */
  size?: Size;
  /**
   * Type of text
   */
  type?: TextType;
}

const sizeMapping = {
  xs: "xs",
  sm: "sm",
  md: "md",
  base: "lg",
  lg: "xl",
  xl: "2xl",
};

export const Text = (props: TextProps) => {
  const {
    size = "base",
    children,
    weight = "normal",
    className="",
    type = "span",
    ...rest
  } = props;

  switch (type) {
    case "div":
      return (
        <div
          {...rest}
          className={`${className} font-${weight} text-${sizeMapping[size]}`}
        >
          {children}
        </div>
      );
    case "span":
      return (
        <span
          {...rest}
          className={`${className} font-${weight} text-${sizeMapping[size]}`}
        >
          {children}
        </span>
      );
    default:
      return <></>;
  }
};

Text.displayName = "Text";

export default Text;
