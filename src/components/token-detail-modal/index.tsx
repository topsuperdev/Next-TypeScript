import React, { FC } from "react";
// import { Modal } from "react-bootstrap";
import Modal from "src/components/molecules/Modal/Modal";
import { logEvent } from "src/utils/ga";
import TokenAddressRenderer from "../ag-grid-renderers/token-address";
import TokenProfile from "../token/profile";
import { Button } from "src/components/atoms/Button";

interface Props {
  initShow: boolean;
  onClose: () => void;
  token: Solana.SolanaToken;
}

const ItemMetadataModal: FC<Props> = (props) => {
  const { initShow, onClose, token } = props;

  const handleClose = () => {
    logEvent({
      category: "item modal",
      action: "close",
      dimension1: JSON.stringify(token),
    });
    onClose();
  };

  return (
    <Modal
      open={initShow}
      onClose={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      className="bg-app-background"
    >
      <Modal.Header closeIcon={true} onClosePress={handleClose}>
        <div className="flex">
          {/* <div className="flex-initial">
              <Image className="rounded" src="https://pbs.twimg.com/profile_images/1451369598805229568/7PWvrpIe_400x400.png" height={64} width={64} />
            </div> */}
          <div className="flex-initial -mt-1 ml-2 text-primary-dark">
            <div>{token.name}</div>
            <div className="text-sm">
              {TokenAddressRenderer({ value: token.tokenAddr })}
            </div>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <TokenProfile token={token} />
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button appearance="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemMetadataModal;
