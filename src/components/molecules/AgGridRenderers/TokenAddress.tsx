import Link from "next/link";
import React from "react";
import TokenAddressRenderer from "src/components/ag-grid-renderers/token-address";

export interface ITokenAddressProps {
  value: any;
  data: Portfolio.RoundTripTrade;
}

function TokenAddress({ data }: ITokenAddressProps) {
  return (
    <Link href={`/token/${data.tokenAddr}`} passHref>
      <span className="cursor-pointer text-blue-500">
        {TokenAddressRenderer({ value: data.tokenAddr })}
      </span>
    </Link>
  );
}

export default TokenAddress;
