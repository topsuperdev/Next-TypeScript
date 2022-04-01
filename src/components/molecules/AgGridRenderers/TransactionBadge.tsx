import React from "react";
import UserSpecificTxnType from "../PortfolioGallery/user-specific-txn-type";

export interface ITransactionBadgeRendererProps {
  value: any;
  data: Solana.SolanaToken & Solana.JasesSolanaTransaction;
  walletAddr: string;
}

function TransactionBadgeRenderer({
  data,
  walletAddr,
}: ITransactionBadgeRendererProps) {
  return (
    <span>
      <UserSpecificTxnType JasesTxn={data} walletAddr={walletAddr} />
    </span>
  );
}

export default TransactionBadgeRenderer;
