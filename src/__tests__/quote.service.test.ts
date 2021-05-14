
import {Quote} from "../quote/quote.interface"

const quoteService = require("../quote/quote.service")
test("find AAPL quote to be success",()=>{
    return quoteService.find("AAPL").then((val: Quote) =>{
        expect(val.symbol).toBe("AAPL");
    })

})

test("find NOPL quote to fail",async ()=>{
    await expect(quoteService.find("NOPL")).rejects.toThrow(Error);

})