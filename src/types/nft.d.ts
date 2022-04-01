declare namespace NFT {
  interface Item {
    attrs: ItemAttr[];
    avgPrice?: number;
    centralizedStorageImageUrl?: string;
    collectionItemSerialNumber: number;
    collectionSymbol: string;
    createdAt: Date;
    escrowAddr?: string;
    id: number;
    lastPriceSold?: number;
    metadataUrl: string;
    name: string;
    oldestTxnSig: string;
    percFromFloor?: number;
    price?: number;
    salesTxns: SalesTxn[];
    sellerFeeBasisPoints: number;
    tokenAddr: string;
  }

  interface SalesTxn {
    id: number;
    JasesNftItemId: number;
    solTxnId: string;
    txnType?: null;
    blocktime: number;
    txnTime: string;
    salePrice: number;
    exchange?: null;
    buyerAddr?: string;
    sellerAddr?: string;
    percChangeFromFloor?: number;
    createdAt: Date;
    updatedAt: Date;
  }
  interface ItemAttr {
    id: number;
    JasesNftItemId: number;
    traitType: string;
    traitValue: string;
  }
}
