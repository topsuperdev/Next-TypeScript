import numeral from 'numeral';
import React, { FC, useEffect, useState } from "react";
import JasesTradesModal from './Jases-trades-modal';
import JasesTxnsModal from './Jases-txns-modal';
import { CurrentSelection } from './types';
// import CollectionMetadataLineChart from '../collection-metadata-line-chart'

interface Props {
  analyzeJobState: Solana.AnalyzePortfolioJobState
  items: Solana.SolanaToken[]
  currentSelection: CurrentSelection
  setCurrentSelection: (cs: CurrentSelection) => void
}

const WalletSummaryBar: FC<Props> = ({ analyzeJobState, currentSelection, items, setCurrentSelection }) => {
  const [showJasesTxnsModal, setShowJasesTxnsModal] = useState<boolean>(false)
  const [showJasesTradesModal, setShowJasesTradesModal] = useState<boolean>(false)
  const [tradingSummary, setTradingSummary] = useState<Portfolio.TradingSummary | null>(null)

  useEffect(() => {
    async function getAndSet() {
      try {
        const res = await fetch(
          `https://ouo4ylg48g.execute-api.us-east-2.amazonaws.com/prod/pnl/wallet/${analyzeJobState.walletAddr}`
        );
        const ts: Portfolio.TradingSummary = await res.json();
        if (ts) setTradingSummary(ts);
      } catch (error: any) {
        throw new Error(`Error | Summary Bar | ${error?.message}`);
      }
    }
    getAndSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ACTIVE_CLASSES = 'w-32 m-2 rounded-md cursor-pointer bg-app-background-light font-bold text-center'
  const INACTIVE_CLASSES = 'border border-background-color w-32 m-2 rounded-md cursor-pointer bg-app-background-plain font-bold text-center'

  return (
    <>
      <div className='flex flex-wrap justify-center h-18'>
        <div className={currentSelection === 'all' ? ACTIVE_CLASSES : INACTIVE_CLASSES} onClick={() => setCurrentSelection('all')}>
          <div className="text-primary-dark">
            {items.length}
          </div>
          <div className="text-primary-medium font-bold text-center justify-center">
            Items
          </div>
        </div>
        <div className={currentSelection === 'unlisted' ? ACTIVE_CLASSES : INACTIVE_CLASSES} onClick={() => setCurrentSelection('unlisted')}>
          <div className="text-primary-dark">
            {items.filter(x => !x.mostRecentTxn).length}
          </div>
          <div className="text-primary-medium font-bold text-center justify-center">
            Unlisted
          </div>
        </div>
        <div className={currentSelection === 'listed' ? ACTIVE_CLASSES : INACTIVE_CLASSES} onClick={() => setCurrentSelection('listed')}>
          <div className="text-primary-dark">
            {items.filter(x => !!x.mostRecentTxn).length}
          </div>
          <div className="text-primary-medium font-bold text-center justify-center">
            Listed
          </div>
        </div>
        <div className={INACTIVE_CLASSES} onClick={() => setShowJasesTxnsModal(true)}>
          <div className="text-primary-dark">
            {numeral(analyzeJobState?.JasesTxnCount).format(`0,0`) || 'N/A'}
          </div>
          <div className="text-primary-medium font-bold text-center justify-center">
            Transactions
          </div>
        </div>
        {tradingSummary && (
          <div className={INACTIVE_CLASSES} onClick={() => setShowJasesTradesModal(true)}>
            <div className="text-primary-dark">
              {tradingSummary?.pnl.length || 'N/A'}
            </div>
            <div className="text-primary-medium font-bold text-center justify-center">
              Trades
            </div>
          </div>
        )}
      </div>

      <JasesTxnsModal handleClose={() => setShowJasesTxnsModal(false)} show={showJasesTxnsModal} walletAddr={analyzeJobState.walletAddr} />
      {tradingSummary && (
        <JasesTradesModal handleClose={() => setShowJasesTradesModal(false)} show={showJasesTradesModal} tradingSummary={tradingSummary} walletAddr={analyzeJobState.walletAddr} />
      )}
    </>
  )
}

export default WalletSummaryBar
