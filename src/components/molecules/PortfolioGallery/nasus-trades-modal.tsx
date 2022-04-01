import React, { FC } from "react";
import Modal from "src/components/molecules/Modal/Modal";
import { Button } from "src/components/atoms/Button";
import { logEvent } from "src/utils/ga";
import { ColDef } from "ag-grid-community";
import AgGridTable from "src/components/molecules/AgGridTable";
import { TokenAddress, DateRenderer } from "../AgGridRenderers";

interface Props {
  handleClose: () => void;
  show: boolean;
  tradingSummary: Portfolio.TradingSummary;
  walletAddr: string;
}

const gridColumns: ColDef[] = [
  {
    field: "tokenAddress",
    headerName: "Token",
    cellRenderer: "tokenAddressRenderer",
  },
  {
    field: "entryDate",
    headerName: "Entry Date",
    cellRenderer: "dateRenderer",
  },
  {
    field: "entryPrice",
    headerName: "Entry Price",
  },
  {
    field: "exitDate",
    headerName: "Exit Date",
    cellRenderer: "dateRenderer",
  },
  {
    field: "exitPrice",
    headerName: "Exit Price",
  },
  {
    field: "changeSol",
    headerName: "Change (◎)",
  },
  {
    field: "changeSolPerc",
    headerName: "Change (%)",
  },
];

const JasesTradesModal: FC<Props> = ({
  handleClose,
  show,
  tradingSummary,
  walletAddr,
}) => {
  const handleCloseImpl = () => {
    logEvent({ category: "portfolio Jases trades modal", action: "dismiss" });
    handleClose();
  };

  if (!tradingSummary) {
    // <div className="py-2 text-center text-coolGray-600">Loading...</div>
    return null;
  }

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
              <strong>Found {tradingSummary.pnl.length}</strong> trades
            </div>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="overflow-x-auto">
            <AgGridTable
              data={tradingSummary.pnl}
              frameworkComponents={{
                tokenAddressRenderer: TokenAddress,
                dateRenderer: DateRenderer,
              }}
              columns={gridColumns}
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

export default JasesTradesModal;
