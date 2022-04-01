import numeral from 'numeral'
import React, { FC, useEffect, useState } from 'react'
import { db } from 'src/services/firebase'

const SolQuote: FC = React.memo(() => {
  const [quote, setQuote] = useState<Coins.Coin>()

  useEffect(() => {
    db
      .ref("market-data/asset-class/crypto/SOLUSDT")
      .on("value", snapshot => {

        const quote: Coins.Coin = snapshot.val()
        if (quote) setQuote(quote)
      })
  }, [])

  if (!quote) return null

  const color = quote.change > 0 ? 'text-green-400' : 'text-red-400'
  const sign = quote.change > 0 ? '+' : ''

  return (
    <>
      <span className="text-gray-500">
        SOL/USD
      </span>
      <span className="text-white pl-2">
        {numeral(quote.latestPrice).format(`0,0.00`)}
      </span>
      <span className={`${color} pl-2`}>
        <span className="pl-1">
          ({sign}{numeral(quote.changePercent * 100).format(`0,0.00`)}%)
        </span>
      </span>
    </>
  )
});

SolQuote.displayName = "SolQuote";

export default SolQuote
