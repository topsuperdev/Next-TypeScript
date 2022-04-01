declare namespace Coins {
  export interface Coin {
    symbol: string;
    latestPrice: number;
    change: number;
    changePercent: number;
  }
}
// wen split this overgrown file up?

declare namespace Tweets {
  export interface Tweet {
    createdAt: string;
    idStr: string;
    text: string;
    userName: string;
    userScreenName: string;
    userProfileImageUrl: string;
  }
}

declare namespace Solanart {
  export interface ForSale {
    id: number;
    token_add: string;
    number: number;
    currency: string;
    price: number;
    link_img: string;
    for_sale: number;
    programId: string;
    name: string;
    collectionSerialNumber: number;
    collectionName: string;
    description: string;
    escrowAdd: string;
    seller_address: string;
    attributes: string[]; // want to make this an interface at some point
    skin?: string;
    type?: string;
    ranking?: string;
    buyerAdd?: string;
    lastSoldPrice?: string;
    createdAt: Date;
  }
  export interface CollectionMeta {
    solanartCollectionName: string;
    dailySales: number;
    dailyVolume: number;
    totalSales: number;
    totalVolume: number;
    forSaleItemsCount: number;
    forSaleOwnersCount: number;
    floor: number;
    createdAt: Date;
  }
}

declare namespace Collection {
  interface Collection {
    id: number;
    name: string;
    parentAccountId: string;
    solanartNameInternal: string;
    symbol: string;
    thumbnailImage: string;
    solanartCollectionMetadata?: Solanart.CollectionMeta[];
    blockchain: string;
  }
}

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

declare namespace Solana {
  interface MetaplexMetadataProperties {
    category: string;
    creators: MetaplexMetadataCreator[];
    files: MetaplexMetadataFile[];
  }
  interface MetaplexMetadataCreator {
    address: string;
    share: number;
  }
  interface MetaplexMetadataFile {
    uri: string;
    type: string;
  }

  export interface MetaplexMetadata {
    name: string;
    symbol: string;
    description: string;
    seller_fee_basis_points: number;
    external_url: string;
    edition: string;
    background_color: string;
    attributes: MetaplexMetadataAttr[];
    properties: MetaplexMetadataProperties;
    image: string;
  }

  interface MetaplexMetadataAttr {
    display_type: number;
    trait_type: string;
    value: string;
  }

  export class SolanaToken {
    tokenAddr: string;
    collectionAddr?: string;
    metadataUrl?: string;
    name?: string;
    collectionItemSerialNumber: number;
    metadataContent: string;
    centralizedStorageImageUrl?: string;
    sellerFeeBasisPoints?: number;
    escrowAddr?: string;
    lastPriceSold?: number;
    price?: number;
    avgPrice?: number;
    percFromFloor?: number;
    mostRecentTxn?: JasesSolanaTransaction;
    createdAt?: Date;
    updatedAt?: Date;
    JasesThumbnailImageUrl?: string
    collectionSymbol?: string
  }

  // @todo add FTX (they work a bit differently, since you need to have your own address there)
  export type ExchangeName =
    | "alpha-art"
    | "digital-eyes"
    | "magic-eden"
    | "smb"
    | "solanart"
    | "solsea";

  export type TxnType = 'airdrop' | 'buy' | 'delist' | 'list' | 'mint' | 'sell';
  export type UserAgnosticTxnType =
    | "airdrop"
    | "change-price"
    | "delist"
    | "exchange"
    | "mint"
    | "sell"
    | "list"

  export interface AnalyzePortfolioJobState {
    readonly jobId: string;
    readonly jobStartedAt: Date;
    readonly message: string;
    readonly status: "in-progress" | "failure" | "success";
    readonly walletAddr: string;
    readonly percentComplete?: number;
    readonly itemCount?: number;
    readonly oldestTokenImage?: string;
    readonly JasesTxnCount?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
  }
  export class JasesSolanaTransaction {
    id: string;
    exchange: ExchangeName;
    tokenAddr: string;
    txnType: string;
    userAgnosticTxnType: UserAgnosticTxnType;
    buyPrice: number;
    sellerProceeds: number;
    buyerAddr: string;
    sellerAddr: string;
    wen: Date;
    blockTime?: number;
    price?: number;
    createdAt?: Date;
    updatedAt?: Date;
    decentralizedStorageImageUrl?: string;
    JasesThumbnailImageUrl?: string;
    name?: string;
  }
}

declare namespace JasesButton {
  /**
   * Button Types
   */
  export type ButtonType = "button" | "submit" | "reset";
  export type Appearance =
    | "primary"
    | "secondary"
    | "transparent"
    | "white";
  export type Size = "tiny" | "regular" | "large";
  export type Alignment = "left" | "right";
}

declare namespace JasesCommon {
  /**
   * Common Types
   */

  export type BaseProps = {
    /**
     * Adds custom class
     */
    className?: string;
  };
}
