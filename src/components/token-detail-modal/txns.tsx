import React, { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap'
import JasesTokenTxn from './Jases-token-txn'

interface Props {
  token: Solana.SolanaToken
}

const TokenTxns: FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [txns, setTxns] = useState<Solana.JasesSolanaTransaction[]>([])
  const { token } = props

  useEffect(() => {
    async function getAndSet() {
      try {
        const res = await fetch(`https://ouo4ylg48g.execute-api.us-east-2.amazonaws.com/prod/Jases-txns/token-addr/${token.tokenAddr}`)
        setIsLoading(false)
        const tt = await res.json()
        const JasesTxns = tt && tt['JasesTxns']
        if (JasesTxns) setTxns(JasesTxns)
      } catch(error: any) {
        throw new Error(`Error | Token Detail Modal - Txns | ${error?.message}`);
      }
    }

    getAndSet()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <div className="p-3">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      </div>
    )
  }

  if (txns && txns.length === 0) {
    return (
      <div className="text-sm text-gray-600 p-3 bg-yellow-100 w-full">
        Could not find any on-exchange transactions for this item. Perhaps it was acquired via an airdrop or off-exchange trasfer?
      </div>
    )
  }

  return (
    <table className="min-w-full w-full divide-y bg-app-background-light overflow-x-scroll">
      <thead className="bg-app-background">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary-dark uppercase tracking-wider">
            Type
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary-dark uppercase tracking-wider">
            Txn
          </th>
          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-primary-dark uppercase tracking-wider">
            Buyer
          </th>
          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-primary-dark uppercase tracking-wider">
            Price
          </th>
          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-primary-dark uppercase tracking-wider">
            Seller
          </th>
          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-primary-dark uppercase tracking-wider">
            Exchange
          </th>
          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-primary-dark uppercase tracking-wider">
            WEN
          </th>
        </tr>
      </thead>
      <tbody>
        {txns.map((rj, index) => (
          <JasesTokenTxn
            isEven={index % 2 === 0}
            key={rj.id}
            JasesTxn={rj}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TokenTxns
