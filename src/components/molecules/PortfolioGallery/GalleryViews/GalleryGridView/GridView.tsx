import React from 'react';
import { sortBy } from "lodash";
import Item from "src/components/molecules/Cards/NFTCard";

export interface IGridViewProps  {
    filteredItems: Solana.SolanaToken[];
    setCurrentToken: (token: Solana.SolanaToken) => void;
}

function GridView({filteredItems, setCurrentToken}: IGridViewProps) {
    return (
        <>
         {filteredItems && filteredItems.length === 1 ? (
        <div className="flex justify-center">
          <Item
            onClickDetails={() => setCurrentToken(filteredItems[0])}
            key={filteredItems[0].tokenAddr}
            item={filteredItems[0]}
          />
        </div>
      ) : (
        <div className="fade-in flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
          {filteredItems &&
            sortBy(filteredItems, "name").map((item) => {
              const onClickDetails = () => setCurrentToken(item);
              return (
                <Item
                  onClickDetails={onClickDetails}
                  key={item.tokenAddr}
                  item={item}
                />
              );
            })}
        </div>
      )}
      </>
    )
}

export default GridView;
