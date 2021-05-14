/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as RatioService from "./ratios.service"
import { Ratios } from "./ratios.interface";

/**
 * Router Definition
 */
export const ratiosRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items/

// GET items/:symbol
ratiosRouter.get("/:symbol", async (req: Request, res: Response) => {
    const symbol: string = req.params.symbol;
  
    try {
      const record: Ratios = await RatioService.find(symbol);
  
      res.status(200).send(record);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

// POST items/

// PUT items/

// DELETE items/:id