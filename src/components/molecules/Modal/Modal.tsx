import React from "react";
import Backdrop from "src/components/atoms/Backdrop";
import { CloseIcon } from "src/components/atoms/Icons";
import Portal from "src/components/atoms/Portal/Portal";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  locked?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Modal(props: ModalProps) {
  const [active, setActive] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const { open, onClose, locked, className="" } = props;
  const backdrop = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsLoaded(true);
  }, [])

  React.useEffect(() => {
    /**
     * Close the Modal on Open change
     */
    setActive(open);
    return () => {
      document.querySelector("#__next")?.removeAttribute("inert");
    };
  }, [open]);

  return (
    <React.Fragment>
      {(open || active) && isLoaded && (
        <Portal className="modal-portal w-full h-full">
          <Backdrop
            onClick={onClose}
            ref={backdrop}
            className={`${active && open ? "modal-active" : ""}`}
          >
            <div
              className={`Jases-modal max-w-6xl shadow-xl rounded-md overflow-auto ${className}`}
            >
              {props.children}
            </div>
          </Backdrop>
        </Portal>
      )}
    </React.Fragment>
  );
}

/**
 * Header Section
 */
export interface ModalHeaderProps {
  children: React.ReactNode | React.ReactText;
  className?: string;
  closeIcon?: boolean;
  onClosePress?: () => void;
}

function Header({
  children,
  closeIcon,
  className="",
  onClosePress,
}: ModalHeaderProps) {
  return (
    <section
      className={`w-full flex justify-between items-center px-4 py-3 bottom-1 border-b-2 ${className}`}
    >
      {children}
      {closeIcon && (
        <span className="cursor-pointer" onClick={onClosePress}>
          <CloseIcon />
        </span>
      )}
    </section>
  );
}

/**
 * Body Section
 */

export interface ModalBodyProps {
  children: React.ReactNode | React.ReactText;
  className?: string;
  closeIcon?: boolean;
  onClosePress?: () => void;
}

function Body({ children, className="" }: ModalBodyProps) {
  return <section className={`w-full p-4 ${className}`}>{children}</section>;
}

/**
 * Footer Section
 */

export interface ModalFooterProps {
  children: React.ReactNode | React.ReactText;
  className?: string;
}

function Footer({ children, className="" }: ModalFooterProps) {
  return (
    <section
      className={`w-full flex bottom-1 px-4 pb-4 ${className}`}
    >
      {children}
    </section>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
