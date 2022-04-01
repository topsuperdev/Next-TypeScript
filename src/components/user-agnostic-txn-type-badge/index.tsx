import React, { FC } from 'react';
import { Badge } from 'react-bootstrap';

interface Props {
  userAgnosticTxnType: Solana.UserAgnosticTxnType
}

const UserAgnosticTxnTypeBadge: FC<Props> = (props: Props) => {
  const { userAgnosticTxnType } = props
  if (!userAgnosticTxnType) return null

  let bg: string
  let text: string
  if (userAgnosticTxnType === 'exchange') {
    bg = 'bg-red-600'
    text = 'text-white'
  } else if (userAgnosticTxnType === 'list') {
    bg = 'bg-yellow-100'
    text = 'text-black'
  } else if (userAgnosticTxnType === 'delist') {
    bg = 'bg-green-100'
    text = 'text-black'
  } else {
    bg = 'bg-yellow-300'
    text = 'text-black'
  }
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shadow-sm ${bg} ${text}`}>
    {userAgnosticTxnType && userAgnosticTxnType.toUpperCase()}
  </span>
  )
}

export default UserAgnosticTxnTypeBadge
