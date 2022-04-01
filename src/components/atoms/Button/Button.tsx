import React from "react";
// import { Icon } from '../Icon';
// import { Spinner } from '../Spinner';
// import { IconProps } from '../Icon/Icon';

export interface ButtonProps extends JasesCommon.BaseProps {
  /**
   * Type of `Button`
   */
  type?: JasesButton.ButtonType;
  /**
   * Color of the `Button`
   * @default "basic"
   */
  appearance?: JasesButton.Appearance;

  /**
   * The size of `Button`
   * @default "regular"
   */
  size?: JasesButton.Size;

  /**
   * Selected state of `Button`
   *
   * **Only applicable for `appearance: 'basic' | 'transparent'`**
   */
  selected?: boolean;
  /**
   * Disables the `Button`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Adds loader inside `Button` when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Text to be added inside `Button`
   */
  children?: React.ReactText | React.ReactNode;

  /**
   * Expands the `Button` to full width
   */
  expanded?: boolean;

  /**
   * Specifies tab index of `Button`
   * @default 0
   */
  tabIndex?: number;
  /**
   * Radius from cornors
   */
  radius?: "rounded" | "square" | "pill";

  /**
   * Handler to be called when `Button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      size = "regular",
      tabIndex = 0,
      appearance = "secondary",
      radius = "rounded",
      expanded = false,
      disabled = false,
      loading = false,
      className="",
      children,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        tabIndex={tabIndex}
        {...rest}
        className={`
          flex justify-center items-center
          text-secondary-light
          box-border relative cursor-pointer select-none py-2 text-center font-normal 
          bg-secondary-medium hover:bg-secondary-dark focus:bg-secondary-dark
          ${size === "tiny" ? "h-7 px-2 text-sm leading-2" : ""}
          ${size === "regular" ? "h-9 px-3 text-base leading-4" : ""}
          ${size === "large" ? "h-13 px-5 text-lg leading-7" : ""}
          ${expanded ? "w-full" : ""}
          ${radius === "rounded" ? "rounded" : ""}
          ${radius === "square" ? "rounded-none" : ""}
          ${radius === "pill" ? "rounded-lg" : ""}
          ${className}
        `}
        disabled={loading || disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
