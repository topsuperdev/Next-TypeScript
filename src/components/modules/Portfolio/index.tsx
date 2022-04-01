import { GetServerSidePropsContext } from "next";
import React, { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PortfolioGallery from "src/components/molecules/PortfolioGallery";
import PsWalletSearchCard from "src/components/ps-wallet-search-card";
import { db } from "src/services/firebase";
import { BASE_API_URL } from "src/utils/api";
import { logPageview } from "src/utils/ga";

interface Props {
  walletAddr: string;
}

const analyzePortfolioJobStateDefault: Solana.AnalyzePortfolioJobState = {
  jobId: '',
  jobStartedAt: new Date(),
  message: '',
  status: "in-progress",
  walletAddr: '',
  percentComplete: 0,
  itemCount: 0,
  oldestTokenImage: '',
  JasesTxnCount: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const PortfolioModule: FC<Props> = ({ walletAddr }) => {
  const [items, setItems] = useState<Solana.SolanaToken[]>([]);
  const [analyzeJobState, setAnalyzeJobState] =
    useState<Solana.AnalyzePortfolioJobState>(analyzePortfolioJobStateDefault);
  const [isInvalidWalletAddr, setIsInValidWalletAddr] =
    useState<boolean>(false);

  useEffect(() => logPageview("analyze portfolio"), []);

  useEffect(() => {
    async function getAndSet() {
      try {        
        const res = await fetch(
          `${BASE_API_URL}/solana-wallet/current-portfolio/${walletAddr}`
        );
        const tt = await res.json();
        setAnalyzeJobState(tt);
        const jobId = tt && tt["jobId"];
        if (!jobId) {
          setIsInValidWalletAddr(true);
          return;
        }
  
        db.ref(`solana/portfolio/jobId/${jobId}/meta`).on(
          "value",
          (snapshot) => snapshot.val() && setAnalyzeJobState(snapshot.val())
        );
  
        db.ref(`solana/portfolio/jobId/${jobId}/items`).on(
          "value",
          (snapshot) => snapshot.val() && setItems(snapshot.val())
        );
      } catch(error: any) {
        throw new Error(`Error | Portfolio | ${error?.message}`)
      }
    }

    getAndSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let inner;
  if (
    isInvalidWalletAddr ||
    (analyzeJobState && analyzeJobState.status === "failure")
  ) {
    inner = (
      <div className="text-center pt-5 text-red-600 text-sm">
        {analyzeJobState.message}
      </div>
    );
  } else if (items || analyzeJobState) {
    inner = (
      <PortfolioGallery
        analyzeJobState={analyzeJobState}
        items={items}
        walletAddr={walletAddr}
      />
    );
  } else {
    inner = null;
  }

  return (
    <main
      className="pt-2 w-full mx-auto px-3 relative min-h-screen"
    >
      <PsWalletSearchCard walletAddrOrig={walletAddr} />
      <Container className="pb-4 px-0">
        {inner}
      </Container>
    </main>
  );
};

export default PortfolioModule;
