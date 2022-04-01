import React, { FC, useEffect, useState } from "react";
import { Container, ProgressBar } from 'react-bootstrap';
import SummaryBar from './summary-bar';
import { CurrentSelection } from './types';
interface Props {
  analyzeJobState: Solana.AnalyzePortfolioJobState
  currentSelection: CurrentSelection
  items?: Solana.SolanaToken[]
  setCurrentSelection: (cs: CurrentSelection) => void
}

const PortfolioGalleryHeader: FC<Props> = ({ analyzeJobState, currentSelection, items, setCurrentSelection }) => {
  const isFinished = analyzeJobState.status === 'success' && items && items.length > 0
  return (
    <Container className="py-4">
      <div className="text-center">
        {isFinished && (
          <div className="fade-in">
            <SummaryBar
              currentSelection={currentSelection}
              items={items}
              //@ts-ignore
              analyzeJobState={analyzeJobState}
              setCurrentSelection={setCurrentSelection}
            />
          </div>
        )}
      </div>
      <div className="text-center container mx-auto max-w-lg">
        {!['success', 'failure'].includes(analyzeJobState.status) && (
          <>
            <div className="text-primary-dark text-sm pb-1 py-3">{analyzeJobState.message}</div>
            <ProgressBar className="rounded-none" animated now={analyzeJobState.percentComplete || 0} />
          </>
        )}
      </div>
    </Container >
  )
}

export default PortfolioGalleryHeader

