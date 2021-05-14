/**
 * Data Model Interfaces
 */


import { Ratios } from "./ratios.interface";
const axios = require('axios');
const url = 'https://fmpcloud.io/api/v3/ratios/';
const key ='6d670354589fd8ad0dc491e9e47fafed';
/**
 * Service Methods
 */
export const find = async (query: string): Promise<Ratios> => {
   const urlWithSymbol= url+query;
   console.log("URL "+urlWithSymbol);
    const result = await axios.get(urlWithSymbol, {
        params: {

          period:'quarter',
          limit:8,
          apikey:key
        },
      });
    console.log("Ratios Result "+result.data);
    if (result) {
      return result.data;
    }
  
    throw new Error("No record found");
  };