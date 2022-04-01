import { startCase } from 'lodash'
import numeral from 'numeral'
import { FC } from 'react'

interface Props {
  JasesTxn: Solana.JasesSolanaTransaction
  walletAddr: string
}

const UserSpecificTxnType: FC<Props> = ({ JasesTxn, walletAddr }) => {

  let price: number = 0;
  if (JasesTxn.userAgnosticTxnType === 'exchange') {
    if (JasesTxn.buyerAddr === walletAddr) {
      price = JasesTxn.buyPrice
    }
    if (JasesTxn.sellerAddr === walletAddr) {
      price = JasesTxn.sellerProceeds
    }
  }

  let priceStr: string = '';
  if (price && price >= 10) {
    priceStr = numeral(price).format(`0,0.00`)
  } else if (price && price < 10) {
    priceStr = numeral(price).format(`0.0000`)
  }

  return (
    <span>
      { priceStr && `◎${priceStr}` }
    </span>
  )
}

export default UserSpecificTxnType
