import { FC } from 'react'
import moment from 'src/utils/moment-with-locale'
import { Card } from 'react-bootstrap'
import ExchangeBadge from 'src/components/exchange-badge'
import TxnPrice from './txn-price'
import UserSpecificTxnType from './user-specific-txn-type'
import Link from 'next/link'

interface Props {
  isEven: boolean
  JasesTxn: Solana.JasesSolanaTransaction
  walletAddr: string
}

const JasesUserSpecificTxn: FC<Props> = ({ isEven, JasesTxn, walletAddr }) => {
  const bgColorClassName = isEven ? "bg-app-background" : "bg-app-primary-light";
  return (
    <tr className={bgColorClassName}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-dark">
        <div className="flex  items-center">
          <div className="flex-initial flex-shrink-0">
            <Card
              className="mx-auto rounded-md"
            >
              <Card.Img className="rounded w-8 h-8" variant="top" src={JasesTxn.JasesThumbnailImageUrl || JasesTxn.decentralizedStorageImageUrl || '/Jases-square.png'} />
            </Card>
          </div>
          <div className="flex-initial ml-2 justify-center">
            {/* {`${JasesTxn.tokenAddr && JasesTxn.tokenAddr.substr(0, 5)}...${JasesTxn.tokenAddr &&  JasesTxn.tokenAddr.substr(-5, JasesTxn.tokenAddr.length - 1)}`} */}
            <Link href={`/token/${JasesTxn.tokenAddr}`} passHref><span className="cursor-pointer text-blue-500">{JasesTxn.name}</span></Link>
          </div>
        </div>
      </td>

      <td className="text-center px-6 py-4 whitespace-nowrap text-sm">
        <UserSpecificTxnType JasesTxn={JasesTxn} walletAddr={walletAddr} />
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <TxnPrice JasesTxn={JasesTxn} walletAddr={walletAddr} />
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm">
        <ExchangeBadge exchangeName={JasesTxn.exchange} />
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <time dateTime={moment((JasesTxn.blockTime ? JasesTxn.blockTime : 0) * 1000).format('YYYY-MM-DD HH:mm:ss')}>{moment((JasesTxn.blockTime ? JasesTxn.blockTime : 0) * 1000).fromNow()}</time>
      </td>
    </tr >
  )
}

export default JasesUserSpecificTxn
