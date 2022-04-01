import moment from 'moment';
import Link from 'next/link'
import { FC } from 'react'
import TokenAddressRenderer from 'src/components/ag-grid-renderers/token-address'

interface Props {
  isEven: boolean
  trade: Portfolio.RoundTripTrade
}

const JasesRoundTripTrade: FC<Props> = ({ isEven, trade }) => {
  const bgColorClassName = isEven ? "bg-app-background" : "bg-app-primary-light";
  return (
    <tr className={bgColorClassName}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-dark">
        <div className="flex items-center">
          {/* <div className="flex-initial flex-shrink-0">
            <Card
              className="mx-auto rounded-md"
            >
              <Card.Img className="rounded w-8 h-8" variant="top" src={JasesTxn.JasesThumbnailImageUrl || JasesTxn.decentralizedStorageImageUrl || '/Jases-square.png'} />
            </Card>
          </div> */}
          <div className="flex-initial ml-2 justify-center">
            {/* {`${JasesTxn.tokenAddr && JasesTxn.tokenAddr.substr(0, 5)}...${JasesTxn.tokenAddr &&  JasesTxn.tokenAddr.substr(-5, JasesTxn.tokenAddr.length - 1)}`} */}
            <Link href={`/token/${trade.tokenAddr}`} passHref>
              <span className="cursor-pointer text-blue-500">
                {TokenAddressRenderer({ value: trade.tokenAddr })}
              </span>
            </Link>
          </div>
        </div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <time dateTime={trade.entryDate.toString()}>
          {moment(trade.entryDate).fromNow()}
        </time>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {trade.entryPrice}
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <time dateTime={trade.exitDate && trade.exitDate.toString()}>
          {trade.exitDate && moment(trade.exitDate).fromNow()}
        </time>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {trade.exitPrice}
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {trade.changeSol}
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {trade.changeSolPerc}
      </td>
    </tr >
  )
}

export default JasesRoundTripTrade
