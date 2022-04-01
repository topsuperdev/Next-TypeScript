declare namespace Coins {
  export interface Coin {
    symbol: string;
    latestPrice: number;
    change: number;
    changePercent: number;
  }
}
