import { startCase } from 'lodash';
import React, { FC } from 'react';

interface Props {
  exchangeName: Solana.ExchangeName
}

const Exchange: FC<Props> = ({ exchangeName }) => {

  if (!exchangeName) return null

  let bg = 'success'
  let emoji = '🙈'
  let text = 'text-white'
  switch (exchangeName) {
    case 'alpha-art':
      bg = 'bg-black'
      emoji = '🅰'
      text = 'text-white'
      break
    case 'digital-eyes':
      bg = 'bg-gray-200'
      emoji = '👀'
      text = 'text-black'
      break
    case 'magic-eden':
      bg = 'bg-violet-900'
      emoji = '🌹'
      text = 'text-white'
      break
    case 'solsea':
      bg = 'bg-green-200'
      emoji = '🐟'
      text = 'text-black'
      break
    case 'solanart':
      bg = 'bg-indigo-600'
      emoji = '👩‍🎨'
      text = 'text-white'
      break
    case 'smb':
      bg = 'bg-blue-400'
      emoji = '🙈'
      text = 'text-white'
      break
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shadow-sm ${bg} ${text}`}>
      {emoji}&nbsp;
      {exchangeName && startCase(exchangeName)}
    </span>
  )
}

export default Exchange
