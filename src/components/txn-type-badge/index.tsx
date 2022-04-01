import React, { FC } from 'react';
import { Badge } from 'react-bootstrap';

interface Props {
  txnType: Solana.TxnType
}

const TxnTypeBadge: FC<Props> = (props: Props) => {

  let bg = "secondary"
  switch (props.txnType) {
    case 'buy':
      bg = 'info'
      break
    case 'sell':
      bg = 'warning'
      break
  }

  return (
    <Badge bg={bg}>{props?.txnType && props.txnType.toUpperCase()}</Badge>
  )
}

export default TxnTypeBadge
