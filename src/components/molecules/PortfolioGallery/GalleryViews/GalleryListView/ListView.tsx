import { ColDef, RowClickedEvent } from "ag-grid-community";
import { sortBy } from "lodash";
import React from "react";
import AgGridTable from "src/components/molecules/AgGridTable";
import { BadgeRenderer, ThumbnailRenderer } from "src/components/molecules/AgGridRenderers";

export interface IListViewProps {
  filteredItems: Solana.SolanaToken[];
  setCurrentToken: (token: Solana.SolanaToken) => void;
}

const gridColumns: ColDef[] = [
  {
    field: "name",
    cellRenderer: "thumbnailRenderer",
  },
  {
    field: "badge",
    headerName: "Exchange",
    cellRenderer: "badgeRenderer",
  }
]

function ListView({ filteredItems, setCurrentToken }: IListViewProps) {
  const onClickDetails = (item: RowClickedEvent) => setCurrentToken(item.data);
  return (
    <div className="fade-in flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
      {filteredItems && (
        <AgGridTable
          data={sortBy(filteredItems, "name")}
          frameworkComponents={{
            thumbnailRenderer: ThumbnailRenderer,
            badgeRenderer: BadgeRenderer,
          }}
          columns={gridColumns}
          onRowClicked={onClickDetails}
        />
      )}
    </div>
  );
}

export default ListView;
