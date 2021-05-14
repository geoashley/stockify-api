/**
 * Data Model Interfaces
 */

//import contentSecurityPolicy from "helmet/dist/middlewares/content-security-policy";
import { Company } from "./company.interface";
const axios = require('axios');
const url = 'https://www.alphavantage.co/query?function=OVERVIEW';
const key ='NDGH9G0HOKZDI7Z4';
/**
 * Service Methods
 */
export const find = async (query: string): Promise<Company> => {
  
    const result = await axios.get(url, {
        params: {
          symbol: query,
          apikey:key
        },
      });
    if (result) {
      return result.data;
    }
  
    throw new Error("No record found");
  };