import React, { FC, useState } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga";
import { logEvent } from "src/utils/ga";
import SearchBar from "src/components/molecules/SearchBar";
import MoreInfoModal from "./more-info-modal";
interface Props {
  walletAddrOrig: string;
}

const PsWalletSearchCard: FC<Props> = ({ walletAddrOrig }) => {
  const [showMoreInfoModal, setShowMoreInfoModal] = useState<boolean>(false);
  const [walletAddr, setWalletAddr] = useState<string>(walletAddrOrig);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWalletAddr(e.target.value.trim());
  const handleOnSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const event: ReactGA.EventArgs = {
      category: "Search Wallet",
      action: "submit address from search card",
      dimension1: walletAddr,
    };
    logEvent(event);

    /**
     * @todo
     * Ran into some state mgmt. issues. Just forcing reload as a quick way of
     * sidestepping them. Should replace this with router.push() tho.
     */
    window.location.href = `/portfolio/${walletAddr.trim()}`;
  };

  return (
    <Container className="pt-16 max-w-lg">
      <h1 className="text-left text-4xl text-plain">
        NFT <strong>Portfolio Viewer</strong>&nbsp;
        <sup className="text-primary-dark text-sm">alpha</sup>
      </h1>
      <div className="block mt-3 text-left font-medium text-primary-dark">
        Jases aggregates on-chain Solana NFT trades (across exchanges) to create
        a more complete view of <strong>all</strong> the NFTs in a wallet.{" "}
        <span
          onClick={() => setShowMoreInfoModal(true)}
          className="text-green-600 font-bold cursor-pointer"
        >
          More
        </span>
      </div>
      <form autoComplete="on" className="mt-3">
        <SearchBar
          onSubmit={(e) => handleOnSubmit(e)}
          onClick={() => setWalletAddr("")}
          onChange={(e) => handleInputOnChange(e)}
          placeholder={walletAddrOrig}
          value={walletAddr}
        />
      </form>

      <MoreInfoModal
        handleClose={() => setShowMoreInfoModal(false)}
        show={showMoreInfoModal}
      />
    </Container>
  );
};

export default PsWalletSearchCard;
