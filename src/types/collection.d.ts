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
