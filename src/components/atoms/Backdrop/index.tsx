import React from "react";

export interface BackdropProps extends JasesCommon.BaseProps {
  /**
   * Text or element to be added inside `Button`
   */
  children?: React.ReactText | React.ReactNode;
  onClick: () => void;
}

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ onClick, children }, ref) => {
    const handleOnClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.target === event.currentTarget) {
        onClick();
      }
    };
    return (
      <div
        ref={ref}
        onClick={handleOnClick}
        className="backdrop-filter backdrop-brightness-150 backdrop-blur-md fixed top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center"
      >
        {children}
      </div>
    );
  }
);

Backdrop.displayName = "Backdrop";

export default Backdrop;
