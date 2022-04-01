import numeral from 'numeral'
import { FC } from 'react'

interface Props {
  JasesTxn: Solana.JasesSolanaTransaction
}

const TokenTxnPrice: FC<Props> = ({ JasesTxn }) => {

  let price: number = 0;
  if (JasesTxn.userAgnosticTxnType === 'exchange') price = JasesTxn.buyPrice

  let priceStr: string = '';
  if (price && price >= 10) {
    priceStr = numeral(price).format(`0,0.00`)
  } else if (price && price < 10) {
    priceStr = numeral(price).format(`0.0000`)
  }

  return <span>{ priceStr && `◎${priceStr}` }</span>
}

export default TokenTxnPrice
