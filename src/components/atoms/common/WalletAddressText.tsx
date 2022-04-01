import * as React from "react";
import { Link } from "src/components/atoms/Link";

export interface WalletAddressTextProps extends JasesCommon.BaseProps {
  walletAddr: string;
  href: string;
}

export const WalletAddressText = (props: WalletAddressTextProps) => {
  const { walletAddr, className="", href, ...rest } = props;

  return (
    <Link
      {...rest}
      href={href}
      className={`${className} hover:underline text-sm text-primary-dark`}
    >
      {`${walletAddr.substr(0, 5)}...${walletAddr.substr(
        -5,
        walletAddr.length - 1
      )}`}
    </Link>
  );
};

WalletAddressText.displayName = "WalletAddressText";

export default WalletAddressText;
