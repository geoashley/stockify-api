/**
 * Data Model Interfaces
 */

import contentSecurityPolicy from "helmet/dist/middlewares/content-security-policy";
import { Quote } from "./quote.interface";
/**
 * In-Memory Store
 */
const quotes: Quote[] = [
    {
    id : 1,
    companyName :"string",
    symbol: "AAPL",
    market: "Nasdaq",
    latestPrice: 116.51,
    openPrice: 115.91,
    highPrice: 119.65,
    lowPrice: 118.29,
    prevClosePrice: 118.19,
    weeks52HighPrice: 144.36,
    weeks52LowPrice: 55.44,
    marketCap: 2033909194974,
    peRatio: 36.13,
    volume: 80138291,

}
]

/**
 * Service Methods
 */
export const find = async (symbol: string): Promise<Quote> => {
    console.log(symbol)
    const record: Quote|undefined = quotes.find(element => element.symbol === symbol)
  
    if (record) {
      return record;
    }
  
    throw new Error("No record found");
  };