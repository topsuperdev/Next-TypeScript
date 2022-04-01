import React, { FC } from 'react';

interface Props {
  token: Solana.SolanaToken
}

const ViewOnExchangeLink: FC<Props> = ({ token }) => {
  if (
    !token?.mostRecentTxn ||
    !token?.mostRecentTxn?.exchange ||
    !['list', 'change-list-price'].includes(token.mostRecentTxn?.userAgnosticTxnType)
  ) return null

  let link: string
  switch (token.mostRecentTxn.exchange) {
    case 'alpha-art':
      link = `https://alpha.art/t/${token.tokenAddr}`
      break
    case 'digital-eyes':
      link = `https://digitaleyes.market/item/${token.tokenAddr}`
      break
    case 'magic-eden':
      link = `https://magiceden.io/item-details/${token.tokenAddr}`
      break
    case 'smb':
      link = `https://market.solanamonkey.business/item/${token.tokenAddr}`
      break
    case 'solanart':
      link = `https://solanart.io/search/?token=${token.tokenAddr}`
      break
    case 'solsea':
      link = `https://solsea.io/nft/${token.tokenAddr}`
      break
  }

  return (
    <div className="text-center mt-2">
      <a className="text-blue-500 flex-initial inline-block align-middle" target="_blank" href={link}  rel="noreferrer">
        View offer on {token.mostRecentTxn.exchange}
      </a>

      <a className="text-blue-500 flex-initial inline-block ml-1" target="_blank" href={link}  rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}

export default ViewOnExchangeLink
