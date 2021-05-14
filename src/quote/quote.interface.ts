export interface Quote {
    id: number;
    companyName:string,
    symbol: string;
    market: string;
    latestPrice: number;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    prevClosePrice: number;
    weeks52HighPrice: number;
    weeks52LowPrice: number;
    marketCap: number;
    peRatio: number;
    volume: number;
  }