import moment from "moment";
import React from "react";

export interface ITimeRendererProps {
  value: any;
  data: Solana.SolanaToken & Solana.JasesSolanaTransaction;
}

function TimeRenderer({ data }: ITimeRendererProps) {
  return (
    <time
      dateTime={moment((data.blockTime ? data.blockTime : 0) * 1000).format(
        "YYYY-MM-DD HH:mm:ss"
      )}
    >
      {moment((data.blockTime ? data.blockTime : 0) * 1000).fromNow()}
    </time>
  );
}

export default TimeRenderer;
