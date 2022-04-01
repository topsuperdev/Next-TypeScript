declare namespace Portfolio {
  interface RoundTripTrade {
    tokenAddr: string
    entryDate: Date
    entryPrice: number
    exitDate: Date
    exitPrice: number
    changeSol: number
    changeSolPerc: number
    txns: UserAwareTxn[]
  }

  type UserAwareTxnType = 'entry' | 'exit'

  type UserAwareTxn = Partial<Solana.JasesSolanaTransaction> & { userAwareTxnType: UserAwareTxnType }

  interface TradingSummary {
    pnl: RoundTripTrade[]
  }
}
