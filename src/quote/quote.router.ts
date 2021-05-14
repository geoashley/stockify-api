/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as QuoteService from "./quote.service"
import {Quote} from "./quote.interface"

/**
 * Router Definition
 */
export const quotesRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items/

// GET items/:symbol
quotesRouter.get("/:symbol", async (req: Request, res: Response) => {
    const symbol: string = req.params.symbol;
  
    try {
      const record: Quote = await QuoteService.find(symbol);
  
      res.status(200).send(record);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

// POST items/

// PUT items/

// DELETE items/:id