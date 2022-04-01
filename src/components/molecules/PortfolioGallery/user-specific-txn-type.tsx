import { startCase } from 'lodash'
import { FC } from 'react'

interface Props {
  JasesTxn: Solana.JasesSolanaTransaction
  walletAddr: string
}

const UserSpecificTxnType: FC<Props> = ({ JasesTxn, walletAddr }) => {

  let bg: string = ''
  let text: string = ''
  
  let userSpecificTxnType: Solana.TxnType | undefined = undefined;
  if (JasesTxn.userAgnosticTxnType === 'exchange') {
    if (JasesTxn.buyerAddr === walletAddr) {
      bg = 'bg-green-600'
      text = 'text-white'
      userSpecificTxnType = 'buy'
    }
    if (JasesTxn.sellerAddr === walletAddr) {
      bg = 'bg-red-600'
      text = 'text-white'
      userSpecificTxnType = 'sell'
    }
  } else if (JasesTxn.userAgnosticTxnType === 'list') {
    bg = 'bg-yellow-100'
    userSpecificTxnType = 'list'
  } else if (JasesTxn.userAgnosticTxnType === 'delist') {
    bg = 'bg-blue-100'
    userSpecificTxnType = 'delist'
  } else if (JasesTxn.userAgnosticTxnType === 'mint') {
    bg = 'bg-green-200'
    text = 'text-black'
    userSpecificTxnType = 'mint'
  } else if (JasesTxn.userAgnosticTxnType === 'airdrop') {
    bg = 'bg-blue-300'
    text = 'text-white'
    userSpecificTxnType = 'airdrop'
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shadow-sm ${bg} ${text}`}>
      {startCase(userSpecificTxnType)}
    </span>
  )
}

export default UserSpecificTxnType
