import React, { FC, useEffect, useState } from "react";
import Modal from "src/components/molecules/Modal/Modal";
import { logEvent } from "src/utils/ga";
import { Button } from "src/components/atoms/Button";
import { ColDef, RowClickedEvent } from "ag-grid-community";
import AgGridTable from "../AgGridTable";
import { useRouter } from "next/router";
import { sortBy } from "lodash";
import {
  BadgeRenderer,
  ThumbnailRenderer,
  TimeRenderer,
  TransactionBadgeRenderer,
  PriceRenderer,
} from "src/components/molecules/AgGridRenderers";

interface Props {
  handleClose: () => void;
  show: boolean;
  walletAddr: string;
}

const gridColumns: ColDef[] = [
  {
    field: "name",
    headerName: "TOKEN",
    cellRenderer: "thumbnailRenderer",
  },
  {
    field: "txn",
    headerName: "TXN",
    cellRenderer: "transactionBadgeRenderer",
  },
  {
    field: "price",
    headerName: "PRICE",
    cellRenderer: "priceRenderer",
  },
  {
    field: "badge",
    headerName: "EXCHANGE",
    cellRenderer: "badgeRenderer",
  },
  {
    field: "wen",
    headerName: "WEN",
    cellRenderer: "timeRenderer",
  },
];

const JasesTxnsModal: FC<Props> = ({ handleClose, show, walletAddr }) => {
  const [JasesTxns, setJasesTxns] = useState<Solana.JasesSolanaTransaction[]>();
  const router = useRouter();
  useEffect(() => {
    async function getAndSet() {
      try {
        const url = `https://ouo4ylg48g.execute-api.us-east-2.amazonaws.com/prod/Jases-txns/wallet/${walletAddr}`;
        const res = await fetch(url);
        const nt = await res.json();
        const rj =
          nt && (nt["JasesTxnsForWallet"] as Solana.JasesSolanaTransaction[]);
        if (rj) setJasesTxns(rj);
      } catch (error: any) {
        throw new Error(`Error | Nesus Transaction Modal | ${error?.message}`);
      }
    }

    getAndSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseImpl = () => {
    logEvent({ category: "portfolio Jases txns modal", action: "dismiss" });
    handleClose();
  };

  if (!JasesTxns) {
    // <div className="py-2 text-center text-coolGray-600">Loading...</div>
    return null;
  }

  if (JasesTxns && JasesTxns.length < 1) {
  }

  const handleRowClick = (item: RowClickedEvent) =>
    router.push(`/token/${item.data.tokenAddr}`);

  return (
    <div>
      <Modal
        open={show}
        onClose={handleCloseImpl}
        aria-labelledby="contained-modal-title-vcenter"
        className="bg-app-background w-full"
      >
        <Modal.Header closeIcon={true} onClosePress={handleCloseImpl}>
          <span>
            <div className="text-primary-dark">
              <span className="">
                Wallet:{" "}
                {`${walletAddr.substr(0, 4)}...${walletAddr.substr(
                  -4,
                  walletAddr.length - 1
                )}`}
              </span>
            </div>
            <div className="text-sm text-primary-dark">
              <strong>Found {JasesTxns.length}</strong> NFT trading events
              across <strong>six</strong> exchanges
            </div>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="overflow-x-auto">
            <AgGridTable
              data={sortBy(JasesTxns, "name")}
              frameworkComponents={{
                thumbnailRenderer: ThumbnailRenderer,
                badgeRenderer: BadgeRenderer,
                timeRenderer: TimeRenderer,
                transactionBadgeRenderer: (props: any) => (
                  <TransactionBadgeRenderer
                    {...props}
                    walletAddr={walletAddr}
                  />
                ),
                priceRenderer: (props: any) => (
                  <PriceRenderer {...props} walletAddr={walletAddr} />
                ),
              }}
              columns={gridColumns}
              onRowClicked={handleRowClick}
            />
          </div>
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

export default JasesTxnsModal;
