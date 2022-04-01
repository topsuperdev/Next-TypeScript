import React, { FC } from "react";
import { Image } from "react-bootstrap";
import Modal from "src/components/molecules/Modal/Modal";
import {Button} from "src/components/atoms/Button";
import { logEvent } from "src/utils/ga";

interface Props {
  handleClose: () => void;
  show: boolean;
}

const MoreInfoModal: FC<Props> = ({ handleClose, show }) => {
  const handleCloseImpl = () => {
    logEvent({ category: "more info modal", action: "dismiss" });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={show}
        onClose={() => handleCloseImpl()}
        aria-labelledby="contained-modal-title-vcenter"
        className="bg-app-background"
      >
        <Modal.Header>
            <div className="flex text-right">
              <div className="flex-initial">
                <Image
                  alt="Jases the Monke"
                  className="rounded w-10 h-10"
                  src="/images/7PWvrpIe_400x400.png"
                />
              </div>
              <div className="flex-initial -mt-1 ml-2 text-primary-dark">
                <a
                  className="text-blue-600 text-sm no-underline"
                  href="https://twitter.com/Jases_the_monke"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Jases the Monke - SMB #2292"
                >
                  @Jases_the_monke
                </a>
              </div>
            </div>
        </Modal.Header>

        <Modal.Body className="text-primary-dark">
          <p>
            <strong>Problem:</strong> All the Solana NFT viewers I know of only
            show you what`s in your wallet. But I also have multiple NFTs listed
            on multiple exchanges as well, and those don`t usually show up 😿
          </p>
          <p className="mt-4">
            <strong>Solution:</strong> I thought it would be helpful to have a
            single portfolio management dashboard where I could see all my
            NFTs in one place.
            {/* And then, once the portfolio modeling is in place, can hack on top of it to do PnL, risk management, taxes, alerts -- all the tooling traders by default in TradFi™ */}
          </p>
          <p className="mt-4">
            Give it a spin. Who knows, it might even find something you listed
            and totally forgot about!
          </p>
          {/* <p>
            Think we can do some pretty cool stuff with this once we have the wrinkles ironed out. Generate P
          </p> */}
          {/* <div>Also, Jases uses cookies for remembering preferences etc.</div> */}
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button appearance="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MoreInfoModal;
