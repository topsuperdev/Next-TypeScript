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
      JasesThumbnailImageUrl?: string;
      sellerFeeBasisPoints?: number;
      escrowAddr?: string;
      lastPriceSold?: number;
      price?: number;
      avgPrice?: number;
      percFromFloor?: number;
      mostRecentTxn?: JasesSolanaTransaction;
      createdAt?: Date;
      updatedAt?: Date;
    }
  
    // @todo add FTX (they work a bit differently, since you need to have your own address there)
    export type ExchangeName =
      | "alpha-art"
      | "digital-eyes"
      | "magic-eden"
      | "smb"
      | "solanart"
      | "solsea";
  
    export type TxnType = "buy" | "list" | "sell" | "delist";
    export type UserAgnosticTxnType =
      | "exchange"
      | "sell"
      | "delist"
      | "change-price"
      | "list";
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
      centralizedStorageImageUrl?: string;
      name?: string;
    }
  }
  