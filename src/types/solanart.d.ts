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
  