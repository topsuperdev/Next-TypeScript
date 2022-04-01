import { FC, useEffect, useState } from "react";
import TokenDetailModal from "src/components/token-detail-modal";
import NFTCardFilterBar from "../FilterBar/NFTCardFilterBar";
import Header from "./header";
import { defaultIndex, gridSwithButtons } from "./NFTCardFilter.config";
import ShareDropdwon from "./share-dropdown";
import { CurrentSelection } from "./types";

interface Props {
  analyzeJobState: Solana.AnalyzePortfolioJobState;
  items: Solana.SolanaToken[];
  walletAddr: string;
}

const PortfolioGallery: FC<Props> = ({ analyzeJobState, walletAddr, items = [] }) => {
  const [viewIndex, setViewIndex] = useState<number>(defaultIndex);
  const [currentSelection, setCurrentSelection] =
    useState<CurrentSelection>("all"); // which category
  const [currentToken, setCurrentToken] = useState<Solana.SolanaToken | null>(
    null
  ); // which item
  const [randomWalletAddr, setRandomWalletAddr] = useState<string>(
    "7euRJbSQ9wwxzYHN3xicukmSjSpKcUGTV7CYhaxvYTz9"
  );

  useEffect(() => {
    async function getAndSet() {
      try {
        const res = await fetch(
          `https://ouo4ylg48g.execute-api.us-east-2.amazonaws.com/prod/wallet-addr/random`
        );
        const tt = await res.json();
        const randomWalletAddr = tt && tt["randomWalletAddr"];
        if (randomWalletAddr) setRandomWalletAddr(randomWalletAddr);
      } catch (error: any) {
        throw new Error(`Error | Portfolio Gallery | ${error?.message}`);
      }
    }

    getAndSet();
  }, []);

  let filteredItems = items;
  switch (currentSelection) {
    case "all":
      filteredItems = items;
      break;
    case "unlisted":
      filteredItems = items.filter((x) => !x.mostRecentTxn);
      break;
    case "listed":
      filteredItems = items.filter((x) => !!x.mostRecentTxn);
      break;
  }

  filteredItems &&
    (filteredItems = filteredItems
      .filter((x) => x && !x?.name?.startsWith("Junkmail")) // filter NSFW
      .filter((x) => x && x.tokenAddr && !x.tokenAddr.startsWith("mSoLz"))); // exclude staked marinade

  const isFinished =
    analyzeJobState.status === "success" && items && items.length > 0;

  const onFilterViewButtonClick = (index: number) => {
    setViewIndex(index);
  };

  return (
    <>
      <Header
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
        items={items}
        analyzeJobState={analyzeJobState}
      />

      {/* Render only If Filteritems data is available */}
      {filteredItems && filteredItems[0] && (
        <>
          <NFTCardFilterBar
            gridSwithButtons={gridSwithButtons.map((btns) => ({
              children: btns.children,
            }))}
            onButtonChange={onFilterViewButtonClick}
            selectedButtonValue={viewIndex}
          />

          {/* Dynamic Change the View of Cards On Button Change
           *  When Grid Button is clicked index will set to 0
           *  When List Button is clicked index will set to 1
           */}
          <ShareDropdwon walletAddr={walletAddr}/>
          <div className="clear-both"></div>
          {gridSwithButtons[viewIndex].component({
            filteredItems: filteredItems,
            setCurrentToken: setCurrentToken,
          })}
        </>
      )}

      {isFinished && (
        <div className="text-sm mt-5 text-center text-gray-400">
          Nothing more to show.{" "}
          <a className="text-blue-400" href={`/portfolio/${randomWalletAddr}`}>
            Jump to a random portfolio!
          </a>
        </div>
      )}
      {currentToken && (
        <TokenDetailModal
          initShow={true}
          onClose={() => setCurrentToken(null)}
          token={currentToken}
        />
      )}
      {/* <div className="text-center pb-5">
        {page > 1 && <Button onClick={() => fetchPage(page - 1)}>Previous</Button>}
        {page > 1 && <span>&nbsp;&nbsp;</span>}
        <Button onClick={() => fetchPage(page + 1)}>Next</Button>
      </div> */}
    </>
  );
};

export default PortfolioGallery;
