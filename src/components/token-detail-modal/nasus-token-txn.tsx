import React, { FC } from 'react'
import moment from 'src/utils/moment-with-locale'
import TokenAddressRenderer from '../ag-grid-renderers/token-address'
import TxnAddressRenderer from '../ag-grid-renderers/txn-address'
import ExchangeBadge from '../exchange-badge'
import UserAgnosticTxnTypeBadge from '../user-agnostic-txn-type-badge'
import TokenTxnPrice from './txn-price'

interface Props {
  isEven: boolean
  JasesTxn: Solana.JasesSolanaTransaction
}

const JasesTokenTxn: FC<Props> = ({ isEven, JasesTxn }) => {
  const bgColorClassName = isEven ? "bg-app-background" : "bg-app-background-light";

  if (!JasesTxn.buyerAddr && !JasesTxn.sellerAddr) return null

  return (
    <tr className={bgColorClassName}>
      <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <UserAgnosticTxnTypeBadge userAgnosticTxnType={JasesTxn.userAgnosticTxnType} />
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {TxnAddressRenderer({ value: JasesTxn.id }) }
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {JasesTxn.buyerAddr && TokenAddressRenderer({ value: JasesTxn.buyerAddr })}
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <TokenTxnPrice JasesTxn={JasesTxn} />
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {JasesTxn.sellerAddr && TokenAddressRenderer({ value: JasesTxn.sellerAddr })}
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm">
        <ExchangeBadge exchangeName={JasesTxn.exchange} /> 
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <time dateTime={moment((JasesTxn.blockTime ? JasesTxn.blockTime : 0) * 1000).format('YYYY-MM-DD HH:mm:ss')}>{moment((JasesTxn.blockTime ? JasesTxn.blockTime : 0) * 1000).fromNow(false)}</time>
      </td>
    </tr >
  )
}

export default JasesTokenTxn
